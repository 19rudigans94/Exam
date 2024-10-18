const InputField = ({ label, type, name, value, onChange, required, style }) => (
    <div className={style}>
        <label>{label}:</label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
        />
    </div>
);

export default InputField;