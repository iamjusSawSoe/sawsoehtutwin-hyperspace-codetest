import Button from "./button";

interface PopupProps {
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <div className="border-b-2 border-blue-950 mb-4">
          <h3 className="text-2xl mb-2">Popup Header</h3>
        </div>
        <p className="mb-6">This is some content inside the pop-up.</p>
        <div className="flex justify-end">
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
