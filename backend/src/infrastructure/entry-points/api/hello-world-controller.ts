import {Get, Mapping} from "@tsclean/core";

@Mapping('/api')
export class HelloWorldController {
    constructor() {
    }

    @Get('/test')
    async getHelloWorld(): Promise<string> {
        return "Hello world"
    }
}
