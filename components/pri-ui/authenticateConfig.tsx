import React from 'react';

const AuthenticateConfig: React.FC = () => {
  return (
    <div className="w-[969px] h-[691px] p-6 bg-white rounded-lg border border-gray-200 flex-col justify-start items-end gap-6 inline-flex">
      <div className="flex-col justify-start items-start gap-6">
        <div className="flex-col justify-start items-start gap-1">
          <div className="text-gray-900 text-[16px] font-semibold leading-normal">
            Configure Your Authentication
          </div>
          <div className="w-[873px] text-gray-500 text-[14px] font-normal leading-tight">
            Authentication lets users prove their identity to your app and authorize access to their data, using your API authentication scheme.
          </div>
        </div>
        <div className="h-[511px] flex-col justify-start items-start gap-3">
          <div className="flex-col justify-start items-start gap-1">
            <div className="w-[921px] text-gray-900 text-[14px] font-medium mt-6">
              Authentication Type
            </div>
            <div className="w-[873px] text-gray-500 text-[14px] font-normal leading-tight">
              Choose how you would like users to prove their identity to your app and authorize access to their data.
            </div>
          </div>

          {/* 1 */}
        
          <div className="self-stretch justify-start items-start gap-2 inline-flex mt-3">
            <div className="flex-col justify-start items-start inline-flex">
              <div className="self-stretch px-5 py-2.5 bg-white rounded-md border border-gray-200 justify-start items-center gap-5 inline-flex">
                <div className="w-4 h-4 relative bg-white rounded-lg border-2 border-gray-300" />
                <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                  <div className="text-gray-900 text-[12px] font-medium">API Key</div>
                  <div className="self-stretch text-gray-500 text-[12px] font-normal">
                    Use the API Key authentication type if you simply need to collect some information from your users and then include that information, as it was entered by the user, when you make an API request. Learn more.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2 */}

          <div className="self-stretch justify-start items-start gap-2 inline-flex mt-3">
            <div className="flex-col justify-start items-start inline-flex">
              <div className="self-stretch px-5 py-2.5 bg-white rounded-md border border-gray-200 justify-start items-center gap-5 inline-flex">
                <div className="w-4 h-4 relative bg-white rounded-lg border-2 border-gray-300" />
                <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                  <div className="text-gray-900 text-[12px] font-medium">API Key</div>
                  <div className="self-stretch text-gray-500 text-[12px] font-normal">
                    Use the API Key authentication type if you simply need to collect some information from your users and then include that information, as it was entered by the user, when you make an API request. Learn more.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3 */}

          <div className="self-stretch justify-start items-start gap-2 inline-flex mt-3">
            <div className="flex-col justify-start items-start inline-flex">
              <div className="self-stretch px-5 py-2.5 bg-white rounded-md border border-gray-200 justify-start items-center gap-5 inline-flex">
                <div className="w-4 h-4 relative bg-white rounded-lg border-2 border-gray-300" />
                <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                  <div className="text-gray-900 text-[12px] font-medium">API Key</div>
                  <div className="self-stretch text-gray-500 text-[12px] font-normal">
                    Use the API Key authentication type if you simply need to collect some information from your users and then include that information, as it was entered by the user, when you make an API request. Learn more.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 */}
          <div className="self-stretch justify-start items-start gap-2 inline-flex mt-3">
            <div className="flex-col justify-start items-start inline-flex">
              <div className="self-stretch px-5 py-2.5 bg-white rounded-md border border-gray-200 justify-start items-center gap-5 inline-flex">
                <div className="w-4 h-4 relative bg-white rounded-lg border-2 border-gray-300" />
                <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                  <div className="text-gray-900 text-[12px] font-medium">API Key</div>
                  <div className="self-stretch text-gray-500 text-[12px] font-normal">
                    Use the API Key authentication type if you simply need to collect some information from your users and then include that information, as it was entered by the user, when you make an API request. Learn more.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 5 */}
          <div className="self-stretch justify-start items-start gap-2 inline-flex mt-3">
            <div className="flex-col justify-start items-start inline-flex">
              <div className="self-stretch px-5 py-2.5 bg-white rounded-md border border-gray-200 justify-start items-center gap-5 inline-flex">
                <div className="w-4 h-4 relative bg-white rounded-lg border-2 border-gray-300" />
                <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                  <div className="text-gray-900 text-[12px] font-medium">API Key</div>
                  <div className="self-stretch text-gray-500 text-[12px] font-normal">
                    Use the API Key authentication type if you simply need to collect some information from your users and then include that information, as it was entered by the user, when you make an API request. Learn more.
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Other authentication type sections */}
        </div>
      </div>
      <div className="self-stretch h-9 flex-col justify-start items-end gap-2.5">
        <div className="px-3.5 py-2 bg-blue-600 rounded shadow justify-end items-center gap-2 inline-flex">
          <div className="text-center text-white text-[14px] font-semibold leading-tight">Save & Continue</div>
        </div>
      </div>
    </div>
  );
};

export default AuthenticateConfig;
