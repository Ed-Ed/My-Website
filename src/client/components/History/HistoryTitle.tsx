import React from 'react';
import styled from 'styled-components';
import { Typography } from '@edwardandrewb/elements';

const BoldTypography = styled(Typography)`
  font-weight: 500;
`;

type Props = {
  jobTitle: string;
  jobDate: string;
};

const HistoryTitle: React.FC<Props> = ({ jobTitle, jobDate }) => (
  <>
    <BoldTypography variant="h5">{jobTitle}</BoldTypography>

    <BoldTypography variant="h6" gutterBottom>
      {jobDate}
    </BoldTypography>
  </>
);

export { HistoryTitle };
