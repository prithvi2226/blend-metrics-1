import React, { useState } from 'react';

interface Field {
  label: string;
  key: string;
  required: boolean;
}

const AddFieldComponent: React.FC = () => {
  const [field, setField] = useState<Field>({
    label: '',
    key: '',
    required: false,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setField((prevField) => ({
      ...prevField,
      [name]: value,
    }));
  };

  return (
    <div className="w-[726px] h-[750px] p-6 bg-white rounded-xl shadow flex-col justify-start items-start gap-8 inline-flex">
      <div className="self-stretch h-7 flex-col justify-start items-start gap-2.5 flex">
        <div className="self-stretch h-7 flex-col justify-start items-start gap-2.5 flex">
          <div className="self-stretch justify-between items-center gap-2 inline-flex">
            <div className="text-gray-900 text-lg font-semibold leading-7">Add Field</div>
            <div className="justify-start items-start gap-6 flex">
              <div className="justify-start items-start gap-4 flex">
                <div className="w-6 h-6 justify-center items-center gap-2 flex">
                  <div className="w-6 h-6 relative" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[642px] flex-col justify-start items-start gap-6 flex">
        <div className="self-stretch h-24 flex-col justify-start items-start flex">
          <div className="self-stretch h-24 flex-col justify-start items-start gap-1.5 flex">
            <div className="self-stretch h-24 flex-col justify-start items-start gap-1.5 flex">
              <div>
                <span className="text-slate-700 text-sm font-medium leading-tight">Label </span>
                <span className="text-gray-500 text-sm font-medium leading-tight">(optional)</span>
              </div>
              <div className="self-stretch justify-between items-start gap-1.5 inline-flex">
                <div className="text-gray-500 text-sm font-normal leading-tight">
                  Enter a user-friendly name for this field that describes what to enter.
                </div>
                <div className="text-gray-500 text-xs font-normal leading-tight">0/50</div>
              </div>
              <div className="self-stretch px-3.5 py-2.5 bg-white rounded-[5px] shadow border border-gray-300 justify-start items-center gap-2 inline-flex">
                <input
                  type="text"
                  name="label"
                  value={field.label}
                  onChange={handleInputChange}
                  className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex bg-white"
                />
                <div className="w-4 h-4 relative" />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-24 flex-col justify-start items-start flex">
          <div className="self-stretch h-24 flex-col justify-start items-start gap-1.5 flex">
            <div className="self-stretch h-24 flex-col justify-start items-start gap-1.5 flex">
              <div className="text-slate-700 text-sm font-medium leading-tight">Key</div>
              <div className="self-stretch justify-between items-start gap-1.5 inline-flex">
                <div>
                  <span className="text-gray-500 text-sm font-normal leading-tight">
                    Add the field key, for example: </span>
                  <span className="text-gray-500 text-sm font-bold leading-tight">api_key</span>
                  <span className="text-gray-500 text-sm font-normal leading-tight">.</span>
                </div>
                <div className="text-gray-500 text-xs font-normal leading-tight">0/50</div>
              </div>
              <div className="self-stretch px-3.5 py-2.5 bg-white rounded-[5px] shadow border border-gray-300 justify-start items-center gap-2 inline-flex">
                <input              
                  type="text"
                  name="key"
                  value={field.key}
                  onChange={handleInputChange}
                  className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex bg-white"
                />
                <div className="w-4 h-4 relative" />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-24 flex-col justify-start items-start flex">
          <div className="self-stretch h-24 flex-col justify-start items-start gap-1.5 flex">
            <div className="self-stretch h-24 flex-col justify-start items-start gap-1.5 flex">
              <div>
                <span className="text-slate-700 text-sm font-medium leading-tight">Type</span>
                <span className="text-gray-500 text-sm font-medium leading-tight"> </span>
                <span className="text-gray-400 text-sm font-medium leading-tight">(optional)</span>
              </div>
              <div className="text-gray-500 text-sm font-normal leading-tight">Select API Endpoint</div>
              <div className="self-stretch px-3 py-2.5 bg-white rounded-[5px] shadow border border-gray-300 justify-start items-center gap-2 inline-flex">
                <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
                  <div className="grow shrink basis-0 text-gray-500 text-base font-normal leading-normal">
                    Choose field type
                  </div>
                  <div className="w-5 h-5 relative" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[154px] rounded-[15px] flex-col justify-start items-start flex">
          <div className="self-stretch h-[154px] flex-col justify-start items-start flex">
            <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-1.5 flex">
              <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-1.5 flex">
                <div>
                  <span className="text-slate-700 text-sm font-medium leading-tight">Help Text </span>
                  <span className="text-gray-400 text-sm font-medium leading-tight">(optional)</span>
                </div>
                <div className="self-stretch px-3 py-2.5 bg-white rounded-[5px] shadow border border-gray-300">
                  <div className="w-[643px] text-gray-500 text-sm font-normal leading-tight">
                    Explain to users what to include in this field, especially for API keys and other hard-to-find info.
                    Include directions to find the data and links to your app settings or help docs.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch justify-end items-center gap-2.5 inline-flex">
          <div className="self-stretch pt-5 rounded-[5px] justify-end items-end flex">
            <div className="grow shrink basis-0 self-stretch justify-end items-center gap-2.5 flex">
              <div className="rounded-[5px] justify-start items-start flex">
                <div className="px-3.5 py-2 bg-blue-600 rounded-[5px] shadow border border-blue-600 justify-center items-center gap-2 flex">
                <button className="px-3.5 py-2 bg-blue-600 rounded-[5px] shadow border border-blue-600 text-white text-base font-semibold capitalize leading-tight">
  Add Field
</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFieldComponent;
