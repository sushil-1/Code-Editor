
interface SubmitProps {
    onClose: () => void;
}
const SubmitMessage: React.FC<SubmitProps> = ({ onClose }) => {
    return (
        <div className="flex flex-col my-2 bg-gray-50 border-2 rounded-lg">

            <div className="flex justify-end">
            <button 
              onClick={onClose}
              className="py-1 px-2 text-sm border-2 rounded-md"
            >
                Close
            </button>
            </div>

            <div className="m-1">
              Code Submitted Successfully!
            </div>
        </div>
    )
}

export default SubmitMessage;