import React from "react";
import { Typography } from "@mui/material";

import BodyWrapper from "../../../components/body-wrapper";
import Spacer from "../../../components/spacer";


// ---------------------------------------------------------

const PrivacyPolicy = () => {
  return (
    <>
      <BodyWrapper>
        <Typography variant="h5">
          PRIVACY POLICY
        </Typography>
        <Typography variant="h6">
          Effective Date: 05th July 2024
        </Typography>

        <Typography variant="body2">
          Thank you for playing my games! This Privacy Policy describes:
          <br /><br />
          &nbsp; &nbsp; ◆ &nbsp; The ways I collect personal data about you and why I do so, and<br />
          &nbsp; &nbsp; ◆ &nbsp; How I use your personal data.
          <br /><br />
          This Privacy Policy applies to J. Games Entertainment games, websites and related services, which is collectively called the Service. My games are built as Freemium apps. This SERVICE is provided by at no cost and is intended for use as is.
          <br /><br />
          This page is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal Information if anyone decided to use my Service.
          <br /><br />
          If you choose to use my Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that I collect is used for providing and improving the Service. I will not share your information with anyone except as described in this Privacy Policy.
          <br /><br />
          The terms used in this Privacy Policy have the same meanings as in the Term and Conditions unless otherwise defined in this Privacy Policy.
        </Typography>

        <Spacer amount={30} />

        <Typography variant="h6">
          Entity Reference
        </Typography>
        <Typography variant="body2">
          J. Games Entertainment, referred to as "the company", is responsible for this Service. The developer, Jay Raj, operates under this company as a solo indie game dev.
        </Typography>

        <Spacer amount={30} />

        <Typography variant="h6">
          Information Collection and Use
        </Typography>
        <Typography variant="body2">
          For a better experience, while using this Service, I may require you to provide me with certain personally identifiable information, including but not limited to your name, email address, and usage data. This information is retained on your device and is also collected by me and/or third-party services.
          <br /><br />
          The app does use third-party services that may collect information used to identify you.
          <br /><br />
          &nbsp; &nbsp; ◆ &nbsp; Google Play Games Services<br />
          &nbsp; &nbsp; ◆ &nbsp; Admob
        </Typography>

        <Spacer amount={30} />

        <Typography variant="h6">
          Service Providers
        </Typography>
        <Typography variant="body2">
          I may employ third-party companies and individuals due to the following reasons:
          <br /><br />
          &nbsp; &nbsp; ◆ &nbsp; To facilitate my Service;<br />
          &nbsp; &nbsp; ◆ &nbsp; To provide the Service on my behalf;<br />
          &nbsp; &nbsp; ◆ &nbsp; To perform Service-related services;<br />
          &nbsp; &nbsp; ◆ &nbsp; or To assist me in analyzing how my Service is used.
          <br /><br />
          I want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on my behalf. However, they are obligated not to disclose or use this information for any other purpose.
        </Typography>

        <Spacer amount={30} />

        <Typography variant="h6">
          Security
        </Typography>
        <Typography variant="body2">
          I value your trust in providing me with your Personal Information, thus I am striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and I cannot guarantee its absolute security.
        </Typography>

        <Spacer amount={30} />

        <Typography variant="h6">
          Log Data
        </Typography>
        <Typography variant="body2">
          I want to inform you that whenever you use my Service, in the case of an error in the app, I collect data and information (through third-party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (IP) address, device name, operating system version, the configuration of the app when utilizing my Service, the time and date of your use of my Service, and other statistics.
        </Typography>

        <Spacer amount={30} />

        <Typography variant="h6">
          Data Types and Sharing
        </Typography>
        <Typography variant="body2">
          The app collects the following types of personal and sensitive user data:
          <br /><br />
          &nbsp; &nbsp; ◆ &nbsp; Personal identifiers (e.g., name, email address)<br />
          &nbsp; &nbsp; ◆ &nbsp; Device information (e.g., IP address, device name, operating system version)<br />
          &nbsp; &nbsp; ◆ &nbsp; Usage data (e.g., interaction with the app, time and date of use)
          <br /><br />
          This data is shared with third-party services such as Google Play Games Services and Admob for the purpose of providing and improving the Service.
        </Typography>

        <Spacer amount={30} />

        <Typography variant="h6">
          Data Retention and Deletion Policy
        </Typography>
        <Typography variant="body2">
          I retain personal information for as long as necessary to provide the Service and fulfill the purposes described in this Privacy Policy. You may request deletion of your personal data by contacting me at the email provided below.
        </Typography>

        <Spacer amount={30} />

        <Typography variant="h6">
          Links to Other Sites
        </Typography>
        <Typography variant="body2">
          This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by me. Therefore, I strongly advise you to review the Privacy Policy of these websites. I have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
        </Typography>

        <Spacer amount={30} />

        <Typography variant="h6">
          Children's Privacy
        </Typography>
        <Typography variant="body2">
          These Services do not address anyone under the age of 13. I do not knowingly collect personally identifiable information from children under 13. In the case I discover that a child under 13 has provided me with personal information, I will immediately delete this from my servers. If you are a parent or guardian and you are aware that your child has provided me with personal information, please contact me so that I will be able to take necessary actions.
        </Typography>

        <Spacer amount={30} />

        <Typography variant="h6">
          Changes to This Privacy Policy
        </Typography>
        <Typography variant="body2">
          I may update my Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. I will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.
        </Typography>

        <Spacer amount={30} />

        <Typography variant="h6">
          Point of Contact
        </Typography>
        <Typography variant="body2">
          If you have any inquiries you may reach out to me at:
          <br /><br />
          &nbsp; &nbsp; Developer: Jay Raj
          <br />
          &nbsp; &nbsp; Email: j.raj93.designer@gmail.com
        </Typography>
      </BodyWrapper>
    </>
  );
}


// ---------------------------------------------------------

export default PrivacyPolicy;