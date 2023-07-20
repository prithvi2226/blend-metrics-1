import React from 'react';

const ConnectingAPI2: React.FC = () => {
  return (
    <div className="w-[969px] h-[631px] p-6 bg-white rounded-lg border border-gray-200 flex-col items-end gap-2.5 inline-flex">
      <div className="w-[921px] flex-grow flex-shrink flex-basis-0 flex-col justify-between items-start gap-6">
        <div className="flex-col justify-start items-start gap-6">
          <div className="flex-col justify-start items-start gap-3">
            <div className="flex-col justify-start items-start gap-1">
              <div className="flex-col justify-start items-start gap-1">
                <div className="text-gray-900 text-[16px] font-semibold leading-normal">API Key</div>
              </div>
              <div className="w-[873px]">
                <span className="text-gray-500 text-[14px] font-normal leading-tight">API Key Auth lets you build a form to request an API key, along with any additional fields your API requires for authentication. Zapier then passes the data users enter in those fields with every API call.</span>
                <span className="text-blue-600 text-[14px] font-normal underline leading-tight">Learn more</span>
              </div>
            </div>
          </div>
          <div className="h-[145px] flex-col justify-start items-start gap-6 mt-6">
            <div className="flex-col justify-start items-start gap-2">
              <div className="w-[921px] text-gray-900 text-[14px] font-medium">Authentication Fields</div>
              <div className="w-[873px]">
                <span className="text-gray-500 text-[14px] font-normal leading-tight">Build a form with fields for each item your API requires for authentication, including a field for your API key and an additional field for any other data needed. Blend Metrics does not include any fields by default.</span>
                <span className="text-gray-500 text-[14px] font-bold leading-tight">You must define at least one field where your users can enter API credentials.</span>
              </div>
            </div>
            <div className="px-4 py-2 bg-white rounded shadow border border-gray-300 justify-center items-center gap-2 inline-flex mt-6">
              <div className="w-[15px] h-[15px] pl-[3.13px] pr-[3.12px] pt-[3.13px] pb-[3.12px] justify-center items-center flex">+</div>
              <div className="text-center text-slate-800 text-[14px] font-semibold leading-tight">Add Fields</div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-9 flex-col justify-start items-end gap-2.5 flex">
        <div className="px-3.5 py-2 opacity-50 bg-blue-600 rounded shadow justify-end items-center gap-2 inline-flex">
          <div className="text-center text-white text-[14px] font-semibold leading-tight">Save & Continue</div>
        </div>
      </div>
    </div>
  );
};

export default ConnectingAPI2;
