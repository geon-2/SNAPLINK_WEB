import Header from "@components/Header";
import styled from "styled-components";
import GooglePlayIcon from '@assets/icons/download-google-play.svg';
import AppStoreIcon from '@assets/icons/download-app-store.svg';
import {useMediaQuery} from "@hooks/useMediaQuery.ts";
import InquiryForm from "@components/Home/InquiryForm.tsx";
import Footer from "@components/Footer.tsx";

export default function Home() {
    const isLow1200 = useMediaQuery('(max-width: 1300px)');

    const DesktopDescription = () => (
        <>
            <AppDescriptionWrapper>
                <AppDescriptionTextWrapper>
                    <AppDescriptionTitle>
                        나의 스냅촬영 작가님을{'\n'}
                        <AppDescriptionHighlight>
                            원하는 일시에 예약해 보세요
                        </AppDescriptionHighlight>
                    </AppDescriptionTitle>
                    <AppDescriptionText>
                        SNS 계정에서 DM 더 이상 기다릴 필요없이 내가 원하는 날짜와 시간에 원하는 사진작가님과 예약하고 간편한 스냅사진 촬영을 경험해보세요.
                    </AppDescriptionText>
                </AppDescriptionTextWrapper>
                <AppDescriptionImageWrapper />
            </AppDescriptionWrapper>
            <AppDescriptionWrapper>
                <AppDescriptionImageWrapper />
                <AppDescriptionTextWrapper>
                    <AppDescriptionTitle>
                        원하는 스타일과 콘셉트를{'\n'}
                        <AppDescriptionHighlight>
                            한 페이지에서 한 눈에 확인하세요
                        </AppDescriptionHighlight>
                    </AppDescriptionTitle>
                    <AppDescriptionText>
                        내가 원하는 작가님은 어디있을까? 스냅링크의 검증된 작가 라인업을 통해 퀄리티 걱정없이 원하는 스타일과 콘셉트에 맞는 작가님을 한 눈에 보여드립니다.
                    </AppDescriptionText>
                </AppDescriptionTextWrapper>
            </AppDescriptionWrapper>
            <AppDescriptionWrapper>
                <AppDescriptionTextWrapper>
                    <AppDescriptionTitle>
                        일상부터 촬영꿀팁까지{'\n'}
                        <AppDescriptionHighlight>
                            커뮤니티에 공유해 보세요
                        </AppDescriptionHighlight>
                    </AppDescriptionTitle>
                    <AppDescriptionText>
                        SNS에서 하나하나 알아보느라 번거로우셨죠? 이제는 스냅링크를 통해 간편하게 정보 공유하고 고민을 해결해보세요.
                    </AppDescriptionText>
                </AppDescriptionTextWrapper>
                <AppDescriptionImageWrapper />
            </AppDescriptionWrapper>
        </>
    )

    const MobileDescription = () => (
        <>
            <AppDescriptionWrapperInMobile>
                <AppDescriptionTextWrapperInMobile>
                    <AppDescriptionTitle>
                        나의 스냅촬영 작가님을{'\n'}
                        <AppDescriptionHighlight>
                            원하는 일시에 예약해 보세요
                        </AppDescriptionHighlight>
                    </AppDescriptionTitle>
                    <AppDescriptionText>
                        SNS 계정에서 DM 더 이상 기다릴 필요없이 내가 원하는 날짜와 시간에 원하는 사진작가님과 예약하고 간편한 스냅사진 촬영을 경험해보세요.
                    </AppDescriptionText>
                </AppDescriptionTextWrapperInMobile>
            </AppDescriptionWrapperInMobile>
            <AppDescriptionWrapperInMobile>
                 <AppDescriptionImageWrapper />
            </AppDescriptionWrapperInMobile>
                <AppDescriptionWrapperInMobile>
                <AppDescriptionTextWrapperInMobile>
                    <AppDescriptionTitle>
                        원하는 스타일과 콘셉트를{'\n'}
                        <AppDescriptionHighlight>
                            한 페이지에서 한 눈에 확인하세요
                        </AppDescriptionHighlight>
                    </AppDescriptionTitle>
                    <AppDescriptionText>
                        내가 원하는 작가님은 어디있을까? 스냅링크의 검증된 작가 라인업을 통해 퀄리티 걱정없이 원하는 스타일과 콘셉트에 맞는 작가님을 한 눈에 보여드립니다.
                    </AppDescriptionText>
                </AppDescriptionTextWrapperInMobile>
            </AppDescriptionWrapperInMobile>
            <AppDescriptionWrapperInMobile>
                <AppDescriptionImageWrapper />
            </AppDescriptionWrapperInMobile>
            <AppDescriptionWrapperInMobile>
                <AppDescriptionTextWrapperInMobile>
                    <AppDescriptionTitle>
                        일상부터 촬영꿀팁까지{'\n'}
                        <AppDescriptionHighlight>
                            커뮤니티에 공유해 보세요
                        </AppDescriptionHighlight>
                    </AppDescriptionTitle>
                    <AppDescriptionText>
                        SNS에서 하나하나 알아보느라 번거로우셨죠? 이제는 스냅링크를 통해 간편하게 정보 공유하고 고민을 해결해보세요.
                    </AppDescriptionText>
                </AppDescriptionTextWrapperInMobile>
            </AppDescriptionWrapperInMobile>
            <AppDescriptionWrapperInMobile>
                <AppDescriptionImageWrapper />
            </AppDescriptionWrapperInMobile>
        </>
    )

    return (
        <>
            <Header />
            <Banner>
                {/*<BannerImage alt="Banner" />*/}
                <BannerText>
                    스냅사진을{'\n'}손 안에서 쉽고 간편하게
                </BannerText>
                <DownloadLinkContainer>
                    <DownloadLinkWrapper>
                        <GooglePlayDownloadLink href="/">
                            <DownloadLinkImage src={GooglePlayIcon} alt="GooglePlay" />
                        </GooglePlayDownloadLink>
                        <AppStoreDownloadLink href="/">
                            <DownloadLinkImage src={AppStoreIcon} alt="GooglePlay" />
                        </AppStoreDownloadLink>
                    </DownloadLinkWrapper>
                </DownloadLinkContainer>
            </Banner>
            <AppDescriptionContainer>
                {isLow1200 ? MobileDescription() : DesktopDescription()}
            </AppDescriptionContainer>
            <WelcomeContainer>
                <WelcomeTitle>
                    지금, 스냅링크와 함께{'\n'}
                    사진작가 커리어를 시작해 보세요.
                </WelcomeTitle>
                <WelcomeImage />
                <WelcomeText>
                    스냅촬영 예약부터 관리까지{'\n'}
                    스냅링크 함께 하세요.
                </WelcomeText>
            </WelcomeContainer>
            <InquiryForm />
            <Footer />
        </>
    )
}

const Banner = styled.div`
    width: 100%;
    height: 620px;
    background-color: #D9D9D9;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`
//
// const BannerImage = styled.img`
//     width: 100%;
//     height: 100%;
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     z-index: 1;
// `

const BannerText = styled.p`
    font-size: 48px;
    font-weight: bold;
    color: #000;
    white-space: pre-line;
    text-align: center;
    line-height: 60px;
`

const DownloadLinkContainer = styled.div`
    width: 100%;
    position: absolute;
    bottom: 154px;
    display: flex;
    justify-content: center;
    left: 0;
    right: 0;
    z-index: 3;
`

const DownloadLinkWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 409px;
`

const GooglePlayDownloadLink = styled.a`
    display: block;
    width: 183px;
    height: 54px;
`

const AppStoreDownloadLink = styled.a`
    display: block;
    width: 176px;
    height: 54px;
`

const DownloadLinkImage = styled.img`
    width: 100%;
    height: 100%;
`

const AppDescriptionContainer = styled.div`
    min-height: 1158px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 75px 0;
    flex-wrap: wrap;
`

const AppDescriptionWrapper = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`

const AppDescriptionTextWrapper = styled.div`
    width: 500px;
`

const AppDescriptionTextWrapperInMobile = styled(AppDescriptionTextWrapper)`
    text-align: center;
`

const AppDescriptionImageWrapper = styled.div<{ url?: string }>`
    width: 444px;
    height: 272px;
    border-radius: 10px;
    background: ${({ url }) => url !== undefined ? `url(${url}) no-repeat center / cover` : '#aaa' };
`

const AppDescriptionTitle = styled.h2`
    font-weight: bold;
    font-size: 38px;
    color: #000;
    margin-bottom: 39px;
    white-space: pre-line;
    line-height: 45px;
`

const AppDescriptionHighlight = styled.span`
    color: #00A980;
`

const AppDescriptionText = styled.p`
    font-size: 24px;
    color: #000;
    line-height: 30px;
`

const AppDescriptionWrapperInMobile = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 80px;
`

const WelcomeTitle = styled.h2`
    font-size: 48px;
    font-weight: bold;
    color: #fff;
    white-space: pre-line;
    line-height: 55px;
`

const WelcomeContainer = styled.div`
    background: #00A980;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 168px;
    padding-bottom: 111px;
    text-align: center;
    padding-left: 40px;
    padding-right: 40px;
    box-sizing: border-box;
`

const WelcomeImage = styled.div`
    width: 400px;
    height: 100px;
    margin: 40px 0;
`

const WelcomeText = styled.p`
    font-size: 32px;
    font-weight: 600;
    color: #fff;
    white-space: pre-line;
    line-height: 40px;
`
