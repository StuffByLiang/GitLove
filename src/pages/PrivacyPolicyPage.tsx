import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonContent, IonTitle } from '@ionic/react';
import React from 'react';

const PrivacyPolicyPage: React.FC<any> = (props) => {
    return <>
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton />
                    </IonButtons>
                    <IonTitle>Privacy Policy</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <h1>GitLove.Online Privacy Policy</h1>
                <p>Last Updated: July 12th, 2020</p>
                <p>The GitLove.Online Privacy Policy is designed to help you understand the information we collect and the different ways we may use or share it.</p>
                <p>This policy applies to your use of GitLove.Online. By “GitLove.Online,” we mean the GitLove.Online website, browser extension, mobile app, and any other of our products and services that directly link to this policy. To learn more about privacy at GitLove.Online, please keep reading below.</p>
                <h3>What Information We Collect</h3>
                <p>Information we collect often depends on the exact nature of our relationship with you and how you choose to use GitLove.Online, which is either as a guest or registered user with an account. We have broken these descriptions down into categories to make them clearer:</p>
                <h3>We collect account information.</h3>
                <p>We collect information relating to your account. For example, we collect email address and password so you can create a GitLove.Online account. You may be able to share other account-related information with us too if you edit your account to include fields like name or payment information to make contribution. So far, NO PAYMENT INFORMATION is collected as this is for future implementation to integrate with a financial API.</p>
                <h3>We collect location information.</h3>
                <p>We ask permission to access your location in order to geocode and promote projects/research in your area. This information is not distributed/available to any other parties.</p>
                <p>We use information to protect our company and users. We use information to protect our company and users, for example to identify fraud and secure, protect accounts, and protect GitLove.Online. This includes looking into potentially prohibited or illegal activity.</p>
                <p>Our basis for processing European information. Our basis for processing your information is typically to perform a contract, including responding to your requests. Where this applies, if you choose not to provide information, we may be unable to perform the contract or respond to your request. We also process information based on consent or for our legitimate purposes.</p>
                <p>We also use information as otherwise permitted by law.</p>
                <h3>How We Collect Information</h3>
                <p>Like many other companies, there are different ways that we collect information, which we’ve outlined below:</p>
                <p>We collect information directly from you. You might provide us information in several ways. For example, we collect information when you create an account or give access to location.</p>
                <p>When We Share Information on GitLove.Online.</p>
                <h3>Sharing with vendors.</h3>
                <p>We currently do not give any user information out. All account related information is stored in Google Cloud Firestore.</p>
                <p>We will share information if we think we have to in order to comply with the law or to protect ourselves. For example, we will share information to respond to a court order or subpoena or if a U.S. or non-U.S. law enforcement agency, government agency, or investigatory body requests it. We may also share information we collect when we investigate potential fraud, abuse, or other similar violations of GitLove.Online rules and codes of conduct.</p>
                <p>We may share information with any successor to all or part of our business. If all or part of our business is sold, we’re part of a merger or acquisition, or there is a financing or bankruptcy, we may share information as part of that transaction.</p>
                <p>We may also share information for other reasons we may describe to you or as permitted under law.</p>
                <p>Sale of information. We only use the personal information we collect to help provide, support, and improve GitLove.Online as described in this policy, and we do not “sell” this information to third parties as that term is defined by applicable laws.</p>
                <h3>Licenses</h3>
                <p>The context of this site is held through a hackathon project on a free domain. A free SSL certificate is provided by Google Cloud. Please use discretion if/when using GitLove.Online.</p>
                <h3>Children’s Privacy</h3>
                <p>GitLove.Online is intended to be appropriate for general audiences and is not directed to children under the age of 18. We do not intentionally collect personal information from children under 18, and if we learn that we have unintentionally collected any such information, we will promptly take steps to delete it and terminate the child’s account. If you are under the age of 18, please do not use GitLove.Online or share your personal information with us.</p>
                <h3>How We Protect Information</h3>
                <p>We maintain appropriate administrative, technical, and physical safeguards to protect your personal information from accidental, unlawful, or unauthorized destruction, loss, alteration, access, disclosure, or use and other unlawful forms of processing. You should keep your user credentials and password confidential and secure so that your information is protected.</p>
                <p>We work hard to protect your data, but the Internet is not 100% secure. We encourage you to use caution online. This includes not sharing or reusing your passwords.</p>
                <h3>Transfers of Information</h3>
                <p>GitLove.Online is based in Vancouver BC, which means the information we collect may be processed and stored within the province of British Columbia. We keep personal information as long as it is necessary or relevant for the practices described in this policy and as otherwise required by law.</p>
                <h3>Third-Party Sites</h3>
                <p>We may link to third-party sites or apps. GitLove.Online may also include third-party content that collects information. We do not control these third parties. This policy does not apply to the privacy practices of these third-party websites or apps. Please read the privacy policies of other websites carefully. We are not responsible for the practices of these third-party sites or apps.</p>
                <p>© GitLove.Online Team 2020 • All Rights Reserved</p>
            </IonContent>
        </IonPage>
    </>;
};

export default PrivacyPolicyPage;