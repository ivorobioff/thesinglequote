import { View } from 'sparrow-ui';

class Content extends View {
    constructor(content){
        super();
        this.content = content;
    }

    render(){
        if (typeof this.content === 'string'){
            this.content = $(this.content);
        }

        return this.content;
    }
}

export default Content;