import KVState from "../utils/KVState";
import readKV from "../utils/readKV";

class ResumeState extends KVState<ArrayBuffer> {
    constructor(updateInterval: number) {
        super(new ArrayBuffer(0), updateInterval);
    }

    async getData() {
        const response = await readKV("resume", true) as ArrayBuffer;
        return response;
    }
}

// update every 5 minutes
const resumeState = new ResumeState(1000 * 60 * 5);

export default resumeState;
