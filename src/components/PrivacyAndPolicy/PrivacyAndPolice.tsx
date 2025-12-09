import React from 'react';
import styled from 'styled-components';
import { ScrollWrapper } from '../generalStyles.styled';

interface PrivacyAndPolicyProps {
  height: number;
}

const PrivacyAndPolicy: React.FC<PrivacyAndPolicyProps> = ({ height }) => {
  return (
    <ScrollWrapper
      $listHeight={height}
      style={{ margin: '0 auto', paddingBottom: '40px' }}
    >
      <ParagpaphWrapper>
        <Title>ShowOn TERMS OF USE & PRIVACY POLICY</Title>
        <Paragraph>
          Maksym Bukshovan created the "ShowOn" app as a Freemium app. This
          SERVICE is provided by Maksym Bukshovan free of charge and is intended
          to be used “as is”.
        </Paragraph>
      </ParagpaphWrapper>
      <Paragraph style={{ marginBottom: '18px' }}>
        This page is used to inform visitors regarding policies with the
        collection, use, and disclosure of Personal Information if anyone
        decided to use my Service. If you choose to use my Service, then you
        agree to the collection and use of information in relation to this
        policy. The Personal Information that I collect is used for providing
        and improving the Service. I will not use or share your information with
        anyone except as described in this Privacy Policy.
      </Paragraph>
      <ParagpaphWrapper>
        <Title>USER STATUS</Title>
        <Paragraph>
          Downloading and accessing the App is free of charge, except for the
          cost of the connection to the telecommunications network supplied by
          the service provider contracted by the User. The party who downloads
          and uses the App is granted user status (hereinafter, the “User”),
          which involves reading, understanding, and accepting all the terms and
          Terms stipulated herein.
        </Paragraph>
      </ParagpaphWrapper>
      <Title>USER LICENSE</Title>
      <Paragraph>
        ShowOn grants the User a non-exclusive, non-transferable, revocable
        personal limited license on the App for personal, private,
        non-commercial use thereof, limited in all cases to the terms described
        in these Terms of Use. This license shall be restricted to the period
        set forth in these Terms of Use and shall be subject to the territorial
        availability of the App. Notwithstanding the above, ShowOn can rescind
        or revoke this license at any time.
      </Paragraph>
      <Paragraph>
        The user license described above grants the User the possibility to
        create short personal videos (or “stories”) using the User’s own
        recordings, photographs or other images, adding images and other
        elements provided by the User or furnished through our Service, if so
        desired. All of the above shall take place under the Terms set forth
        herein.
      </Paragraph>
      <TitleSecondary>INFORMATION COLLECTION AND USE</TitleSecondary>
      <Paragraph>
        For a better experience, while using our Service, I may require you to
        provide us with certain personally identifiable information. The
        information that I request will be retained on your device and is not
        collected by me in any way. The app does use third-party services that
        may collect information used to identify you.
      </Paragraph>
      <TitleSecondary>USE OF THE MOBILE APP AND ITS SERVICES</TitleSecondary>
      <Paragraph>
        The User acknowledges and agrees that the contents and/or services
        offered in this mobile App shall be used exclusively at his/her own risk
        and/or liability.
      </Paragraph>
      <Paragraph>
        The User agrees to use this mobile App and all its contents and Services
        in accordance with any applicable legislation, ethical principles, and
        the public order, as well as complying with these Terms of Use and any
        Specific Terms that may, in each case, apply. The User also agrees to
        use the Services and/or contents of the mobile App in an appropriate
        manner and to refrain from using them to perform illicit activities or
        actions that constitute a crime, that infringe or violate the rights of
        third parties and/or that violate intellectual or industrial property
        regulations or any other applicable rules of the legal order.
      </Paragraph>
    </ScrollWrapper>
  );
};

export default PrivacyAndPolicy;

const Title = styled.p`
  font-weight: 700;
  line-height: 1.25;
  text-align: start;
`;

const TitleSecondary = styled(Title)`
  font-weight: 400;
  text-transform: uppercase;
`;

const Paragraph = styled(Title)`
  font-weight: 400;
`;

const ParagpaphWrapper = styled.div`
  margin-bottom: 18px;
`;
