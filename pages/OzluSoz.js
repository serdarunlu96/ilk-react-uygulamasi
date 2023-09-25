export default function OzluSoz(props) {

    if (props.ingilizceMi) {
        return <blockquote>Actions speak louder than words.</blockquote>;
    } else {
        return <blockquote>Eylemler sözlerden daha fazla şey ifade eder.</blockquote>;
    }
}