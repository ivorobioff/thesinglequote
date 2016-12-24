import { View } from 'sparrow-ui';

class Error404 extends View {
    render(){
        return $(`<div><h2>Not Found</h2></div>`);
    }
}

export default Error404;