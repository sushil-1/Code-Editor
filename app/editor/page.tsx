import CodeEditor from "../ui/CodeEditor"
import ProblemStatement from "../ui/ProblemStatement"


const EditorPage = () => {
    return (
        <div className="flex flex-col md:flex-row">
            <ProblemStatement/>
            <CodeEditor/>
        </div>
    )
}

export default EditorPage;