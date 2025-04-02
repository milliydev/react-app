const Field = () => {
    const placeholder= 'Typing...'
    const typeInput = 'text'
    return (
        <div className="flex justify-center items-center">
            <input type={typeInput} placeholder={placeholder} className="border p-2 rounded" />
        </div>
    );
};

export default Field;