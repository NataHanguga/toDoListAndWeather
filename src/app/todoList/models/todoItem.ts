export class TodoItem {
    constructor(
        public title: string,
        public description: string
    ) {
        this.title = title;
        this.description = description;
    }
    isComplete = false;
    date = new Date();
    id = Date.now();
}
