interface InputProps {
  label: string;
  type: string;
  id: string;
  name: string;
  ariaDesc: string;
  placeholder: string;
}
export default function Input({
  label,
  type,
  id,
  name,
  ariaDesc,
  placeholder,
  ...nativeProps
}: InputProps) {
  return (
    <>
      <label
        htmlFor={name}
        className="form-label text-lg fw-medium color-palette-1 mb-10"
      >
        {label}
      </label>
      <input
        type={type}
        className="form-control rounded-pill text-lg"
        id={id}
        name={name}
        aria-describedby={ariaDesc}
        placeholder={placeholder}
        {...nativeProps}
      />
    </>
  );
}
