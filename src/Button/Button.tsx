interface IProps{
    text:string,
    onClick():void;
}

const Button = (props:IProps) => {
    const {text = ''}= props;
    return <button>{text}</button>
}

export {Button};