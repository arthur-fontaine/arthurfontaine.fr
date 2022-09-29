import KVState from "../utils/KVState";
import readKV from "../utils/readKV";

type RedirectMapping = Record<string, string>;

class RedirectMappingState extends KVState<RedirectMapping> {
    constructor(updateInterval: number) {
        super({}, updateInterval);
    }

    async getData() {
        return (await readKV("redirects")) || {};
    }
}

// update every 5 minutes
const redirectMappingState = new RedirectMappingState(5 * 60 * 1000);

export default redirectMappingState;
