export class ButtonModel{
    
    title!: string;
    description!: string;
    link!: string;

    costructor(title: string, description: string, link: string){
        this.link = link;
        this.description = description;
        this.title = title;
    }

}