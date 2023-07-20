import React from 'react';

interface ImportOption {
  label: string;
  description: string;
}

export interface ConnectDataComponentProps {
  title: string;
  description: string;
  importOptions: ImportOption[];
  saveButtonText: string;
}

const ConnectDataComponent: React.FC<ConnectDataComponentProps> = ({
  title,
  description,
  importOptions,
  saveButtonText,
}) => {
  return (
    <div className="w-[969px] h-[261px] p-6 bg-white rounded-lg border border-gray-200 flex-col justify-start items-end gap-2.5 inline-flex">
      <div className="flex-col justify-start items-start gap-6 flex">
        <div className="flex-col justify-start items-start gap-1 flex">
          <div className="text-gray-900 text-base font-semibold leading-normal">{title}</div>
          <div className="w-[873px] text-gray-500 text-sm font-normal leading-tight">{description}</div>
        </div>
        <div className="h-[81px] flex-col justify-start items-start gap-3 flex">
          <div className="self-stretch text-gray-900 text-sm font-medium">Import from...</div>
          <div className="self-stretch justify-start items-start gap-2 inline-flex">
            {importOptions.map((option, index) => (
              <div
                key={index}
                className="grow shrink basis-0 flex-col justify-start items-start inline-flex"
              >
                <div className="self-stretch px-5 py-2.5 bg-white rounded-[7px] border border-gray-200 justify-start items-center gap-5 inline-flex">
                  <div className="w-4 h-4 relative bg-white rounded-lg border border-gray-300" />
                  <div className=" grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
                    <div className="text-gray-900 text-xs font-medium">{option.label}</div>
                    <div className="self-stretch text-gray-500 text-xs font-normal">
                      {option.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="self-stretch h-9 flex-col justify-start items-end gap-2.5 flex">
          <div className="px-3.5 py-2 opacity-50 bg-blue-600 rounded-[5px] shadow justify-end items-center gap-2 inline-flex">
            <div className="text-center text-white text-sm font-semibold leading-tight">
              {saveButtonText}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectDataComponent;
