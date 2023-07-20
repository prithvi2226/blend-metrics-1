import React from 'react';

interface FileUploadBaseProps {
  card1Prop: string;
  card2Prop: string;
  card3Prop: string;
}

const FileUploadBase: React.FC<FileUploadBaseProps> = ({ card1Prop, card2Prop, card3Prop }) => {
  return (
    <div className="w-[544px] h-[436px] relative rounded border border-blue-600">
      <div className="w-[512px] h-[126px] px-6 py-4 left-[16px] top-[16px] absolute bg-white rounded-xl border border-gray-200 flex-col justify-start items-center gap-1 inline-flex">
        <div className="w-[464px] h-[94px] flex-col justify-start items-center gap-3 flex">
          <div className="w-10 h-10 p-2.5 bg-gray-100 rounded-[28px] border-l-2 border-r-2 border-t-2 border-b-2 border-gray-50 justify-center items-center inline-flex">
            <div className="w-5 h-5 px-[1.67px] py-[2.50px] justify-center items-center inline-flex" />
          </div>
          <div className="self-stretch h-[42px] flex-col justify-start items-center gap-1 flex">
            <div className="self-stretch justify-center items-start gap-1 inline-flex">
              <div className="justify-center items-center gap-2 flex">
                <div className="text-blue-600 text-[14px] font-semibold leading-tight">{card1Prop}</div>
              </div>
              <div className="text-slate-600 text-[14px] font-normal leading-tight">or drag and drop</div>
            </div>
            <div className="self-stretch text-center text-slate-600 text-[12px] font-normal leading-none">SVG, PNG, JPG or GIF (max. 800x400px)</div>
          </div>
        </div>
      </div>
      <div className="w-[512px] h-[126px] px-6 py-4 left-[16px] top-[296px] absolute bg-gray-50 rounded-xl border border-gray-200 flex-col justify-start items-center gap-1 inline-flex">
        <div className="w-[464px] h-[94px] flex-col justify-start items-center gap-3 flex">
          <div className="w-10 h-10 p-2.5 bg-gray-100 rounded-[28px] border-l-2 border-r-2 border-t-2 border-b-2 border-gray-50 justify-center items-center inline-flex">
            <div className="w-5 h-5 px-[1.67px] py-[2.50px] justify-center items-center inline-flex" />
          </div>
          <div className="self-stretch h-[42px] flex-col justify-start items-center gap-1 flex">
            <div className="self-stretch justify-center items-start gap-1 inline-flex">
              <div className="justify-center items-center gap-2 flex">
                <div className="text-gray-300 text-[14px] font-semibold leading-tight">{card2Prop}</div>
              </div>
              <div className="text-slate-600 text-[14px] font-normal leading-tight">or drag and drop</div>
            </div>
            <div className="self-stretch text-center text-slate-600 text-[12px] font-normal leading-none">SVG, PNG, JPG or GIF (max. 800x400px)</div>
          </div>
        </div>
      </div>
      <div className="w-[512px] h-[126px] px-6 py-4 left-[16px] top-[156px] absolute bg-white rounded-xl border border-blue-600 flex-col justify-start items-center gap-1 inline-flex">
        <div className="w-[464px] h-[94px] flex-col justify-start items-center gap-3 flex">
          <div className="w-10 h-10 p-2.5 bg-gray-100 rounded-[28px] border-l-2 border-r-2 border-t-2 border-b-2 border-gray-50 justify-center items-center inline-flex">
            <div className="w-5 h-5 px-[1.67px] py-[2.50px] justify-center items-center inline-flex" />
          </div>
          <div className="self-stretch h-[42px] flex-col justify-start items-center gap-1 flex">
            <div className="self-stretch justify-center items-start gap-1 inline-flex">
              <div className="justify-center items-center gap-2 flex">
                <div className="text-blue-600 text-[14px] font-semibold leading-tight">{card3Prop}</div>
              </div>
              <div className="text-slate-600 text-[14px] font-normal leading-tight">or drag and drop</div>
            </div>
            <div className="self-stretch text-center text-slate-600 text-[12px] font-normal leading-none">SVG, PNG, JPG or GIF (max. 800x400)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUploadBase;
export type { FileUploadBaseProps };