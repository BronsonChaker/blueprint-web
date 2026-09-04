export default function LabelInputField({
  label,
  name,
  placeholder,
  onChange,
  type,
  isRequired,
}) {
  const handleChange = (e) => {
    onChange?.(e);
  };

  return (
    <>
      <label htmlFor="" className="text-xs">
        {label}
        {isRequired ? <span className="text-red-800 ml-1">*</span> : null}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="form-label-input"
        onChange={handleChange}
        name={name}
      />
    </>
  );
}
