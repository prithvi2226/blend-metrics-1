import React from 'react';

const AuthenticationFields: React.FC = () => {
  return (
    <div className="w-[969px] h-[631px] p-6 bg-white rounded--lg border border-gray-200 flex-col justify-start items-end gap-2.5 inline-flex">
      <div className="w-[921px] grow shrink basis-0 flex-col justify-between items-start gap-6 flex">
        <div className="flex-col justify-start items-start gap-6 flex">
          <div className="h-[429px] flex-col justify-start items-start gap-6 flex">
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="w-[921px] text-gray-900 text-sm font-medium">Authentication Fields</div>
              <div className="w-[873px]">
                <span style={{ color: 'gray' }} className="text-sm font-normal leading-tight">
                  Build a form with fields for each item your API requires for authentication, including a field for your API key and an additional field for any other data needed.
                  Blend Metrics does not include any fields by default.
                </span>
                <span style={{ color: 'gray', fontWeight: 'bold' }} className="text-sm font-bold leading-tight">
                  You must define at least one field where your users can enter API credentials.
                </span>
              </div>
            </div>
            <div className="self-stretch bg-white rounded--xl border border-gray-200 justify-start items-start inline-flex">
              <div className="w-[297px] flex-col justify-start items-start inline-flex">
                <div className="self-stretch h-11 px-6 py-3 bg-gray-50 border-b border-gray-200 justify-start items-center gap-3 inline-flex">
                  <div className="justify-start items-center gap-1 flex">
                    <div className="text-slate-600 text-xs font-medium leading-[18px]">Label</div>
                    <div className="w-4 h-4 justify-center items-center flex">
                      <div className="w-4 h-4 p-[1.33px] justify-center items-center inline-flex" />
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[72px] px-6 py-4 border-b border-gray-200 justify-start items-center inline-flex">
                  <div className="text-slate-600 text-sm font-normal leading-tight">My Fields 1</div>
                </div>
                <div className="self-stretch h-[72px] px-6 py-4 border-b border-gray-200 justify-start items-center inline-flex">
                  <div className="text-slate-600 text-sm font-normal leading-tight">My Fields 2</div>
                </div>
                <div className="self-stretch h-[72px] px-6 py-4 border-b border-gray-200 justify-start items-center inline-flex">
                  <div className="text-slate-600 text-sm font-normal leading-tight">My Fields 3</div>
                </div>
              </div>
              <div className="w-44 flex-col justify-start items-start inline-flex">
                <div className="self-stretch h-11 px-6 py-3 bg-gray-50 border-b border-gray-200 justify-start items-center gap-3 inline-flex">
                  <div className="justify-start items-center gap-1 flex">
                    <div className="text-slate-600 text-xs font-medium leading-[18px]">Key</div>
                    <div className="w-4 h-4 justify-center items-center flex">
                      <div className="w-4 h-4 p-[1.33px] justify-center items-center inline-flex" />
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[72px] px-6 py-4 border-b border-gray-200 justify-start items-center inline-flex">
                  <div className="text-slate-600 text-sm font-normal leading-tight">api_key</div>
                </div>
                <div className="self-stretch h-[72px] px-6 py-4 border-b border-gray-200 justify-start items-center inline-flex">
                  <div className="text-slate-600 text-sm font-normal leading-tight">api_key</div>
                </div>
                <div className="self-stretch h-[72px] px-6 py-4 border-b border-gray-200 justify-start items-center inline-flex">
                  <div className="text-slate-600 text-sm font-normal leading-tight">api_key</div>
                </div>
              </div>
              <div className="w-56 flex-col justify-start items-start inline-flex">
                <div className="self-stretch h-11 px-6 py-3 bg-gray-50 border-b border-gray-200 justify-start items-center gap-3 inline-flex">
                  <div className="justify-start items-center gap-1 flex">
                    <div className="text-slate-600 text-xs font-medium leading-[18px]">Type</div>
                  </div>
                </div>
                <div className="self-stretch h-[72px] px-6 py-4 border-b border-gray-200 justify-start items-center inline-flex">
                  <div className="text-slate-600 text-sm font-normal leading-tight">password</div>
                </div>
                <div className="self-stretch h-[72px] px-6 py-4 border-b border-gray-200 justify-start items-center inline-flex">
                  <div className="text-slate-600 text-sm font-normal leading-tight">string</div>
                </div>
                <div className="self-stretch h-[72px] px-6 py-4 border-b border-gray-200 justify-start items-center inline-flex">
                  <div className="text-slate-600 text-sm font-normal leading-tight">password</div>
                </div>
              </div>
              <div className="w-56 flex-col justify-start items-start inline-flex">
                <div className="self-stretch h-11 px-6 py-3 bg-gray-50 border-b border-gray-200 justify-start items-center gap-3 inline-flex">
                  <div className="justify-start items-center gap-1 flex">
                    <div className="text-slate-600 text-xs font-medium leading-[18px]">Required</div>
                  </div>
                </div>
                <div className="self-stretch h-[72px] px-6 py-4 border-b border-gray-200 justify-start items-center inline-flex">
                  <div className="text-slate-600 text-sm font-normal leading-tight">Yes</div>
                </div>
                <div className="self-stretch h-[72px] px-6 py-4 border-b border-gray-200 justify-start items-center inline-flex">
                  <div className="text-slate-600 text-sm font-normal leading-tight">No</div>
                </div>
                <div className="self-stretch h-[72px] px-6 py-4 border-b border-gray-200 justify-start items-center inline-flex">
                  <div className="text-slate-600 text-sm font-normal leading-tight">Yes</div>
                </div>
              </div>
            </div>
            <div className="justify-start items-center gap-5 inline-flex">
              <div className="px-4 py-2 bg-white rounded-[5px] shadow border border-gray-300 justify-center items-center gap-2 flex">
                <div className="w-[15px] h-[15px] pl-[3.13px] pr-[3.12px] pt-[3.13px] pb-[3.12px] justify-center items-center flex" />
                <div className="text-center text-slate-800 text-sm font-semibold leading-tight">Add Fields</div>
              </div>
              <div className="justify-center items-center gap-2 flex">
                <div className="w-[15px] h-[15px] px-[1.35px] pt-[3.12px] pb-[3.13px] justify-center items-center flex" />
                <div className="text-center text-blue-600 text-sm font-semibold leading-tight">Preview</div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-9 flex-col justify-start items-end gap-2.5 flex">
          <div className="px-3.5 py-2 bg-blue-600 rounded-[5px] shadow justify-end items-center gap-2 inline-flex">
            <div className="text-center text-white text-sm font-semibold leading-tight">Save & Continue</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthenticationFields;
