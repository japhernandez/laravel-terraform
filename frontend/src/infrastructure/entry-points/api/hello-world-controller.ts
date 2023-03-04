import {Get, Mapping} from "@tsclean/core";

@Mapping('/')
export class HelloWorldController {
    constructor() {
    }

    @Get('hello-world')
    async getHelloWorld(): Promise<string> {
        return "Hello world"
    }
}
