abstract class KVState<D> {
    private data: D;
    private lastUpdate: Date | null = null;
    private currentUpdatePromise: Promise<void> | null = null;

    constructor(defaultValue: D, updateInterval: number) {
        this.data = defaultValue;

        this.updateData(updateInterval);
        setInterval(() => this.updateData(updateInterval), updateInterval);
    }

    abstract getData(): Promise<D>;

    private async updateData(updateInterval: number = 0) {
        if (!this.currentUpdatePromise) {
            this.currentUpdatePromise = (async () => {
                if (!this.lastUpdate || new Date().getTime() - this.lastUpdate.getTime() >= updateInterval) {
                    this.data = await this.getData();
                    this.lastUpdate = new Date();
                }
            })();
            await this.currentUpdatePromise;
            this.currentUpdatePromise = null;
        } else {
            await this.currentUpdatePromise;
        }
    }

    public async get() {
        if (!this.lastUpdate) {
            if (this.currentUpdatePromise) {
                await this.currentUpdatePromise;
            } else {
                await this.updateData();
            }
        }

        return this.data;
    }
}

export default KVState;
