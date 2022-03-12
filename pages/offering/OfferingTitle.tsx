import styles from "../../styles/Home.module.css";
import React, { FunctionComponent } from "react";
import { useIntl, useTranslations } from "next-intl";
import { useRouter } from "next/router";

const OfferingTitle: FunctionComponent = () => {
  const t = useTranslations("About");
  const { locale } = useRouter();
  const intl = useIntl();
  return (
    <div>
      <p>
        {t.rich("description", {
          locale,
          code: (children) => <div>{children}</div>,
        })}
      </p>
    </div>
  );
};

export default OfferingTitle;
