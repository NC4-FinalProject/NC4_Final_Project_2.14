import React from 'react'
import SvgButton from './SvgButton'

const ReportButton = () => {
  return (
    <SvgButton id={'report'} color={'red'} svg={<img src={`${process.env.PUBLIC_URL}/assets/icons/report.svg`} style={{ width: '21px', height: '21px' }} />} />
  );
}

export default ReportButton;