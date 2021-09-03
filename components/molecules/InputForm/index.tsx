interface InputFormProps {
  type: string;
  id: string;
  name: string;
  ariaDesc: string;
  placeholder: string;
}
export default function InputForm({
  type,
  id,
  name,
  ariaDesc,
  placeholder,
}: InputFormProps) {
  return (
    <input
      type={type}
      className="form-control rounded-pill text-lg"
      id={id}
      name={name}
      aria-describedby={ariaDesc}
      placeholder={placeholder}
    />
  );
}
