import {Get, Mapping} from "@tsclean/core";

@Mapping('/api/v1')
export class HelloWorldController {
    constructor() {
    }

    @Get('/hello-world')
    async getHelloWorld(): Promise<string> {
        return "Hello world"
    }
}
