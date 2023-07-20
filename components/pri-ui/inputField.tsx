import React from 'react';
export interface InputFieldProps {
  label: string;
  description?: string;
  value?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const InputField: React.FC<InputFieldProps> = ({
  label,
  description,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <div className="w-[961px] h-[252px] relative rounded border border-purple-500">
      <div className="h-24 left-[20px] top-[20px] absolute flex-col justify-start items-start inline-flex">
        <div className="self-stretch h-24 flex-col justify-start items-start gap-1.5 flex">
          <div className="text-slate-700 text-[14px] font-medium leading-tight">{label}</div>
          {description && (
            <div className="self-stretch justify-between items-start gap-1.5 inline-flex">
              <div className="text-gray-500 text-[14px] font-normal leading-tight">
                {description}
              </div>
              <div className="text-gray-500 text-[12px] font-normal leading-tight">
                {value ? `${value.length}/30` : '0/30'}
              </div>
            </div>
          )}
          <div className="self-stretch px-3.5 py-2.5 bg-white rounded shadow border-2 w-[921px] border-gray-300 justify-start items-center gap-2 inline-flex">
            <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
              <input
                type="text"
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className="grow shrink basis-0 text-gray-500 text-[16px] font-normal leading-normal outline-none border-none bg-transparent w-[921px]"
              />
            </div>
            <div className="w-4 h-4 relative" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default InputField;