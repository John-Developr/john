/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React, { PropsWithChildren } from 'react';

/* ------------------------- MansoryLayout PropTypes ------------------------ */

const MansoryLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="mansory-layout">
        {children}
    </div>
  );
};

export default MansoryLayout;
