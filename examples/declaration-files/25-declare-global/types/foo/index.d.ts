// types/foo/index.d.ts

declare global {
    interface String {
        prependHello(): string;
    }
}

export {};
