import Head from 'next/head'
import React, {useState} from 'react'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { GeneratedIdentifierFlags } from 'typescript'
//import { GradientBackgroundCon } from '@/Components/QuoteGenerator/QuoteGeneratorElements'

// Components
import { BackgroundImage1, BackgroundImage2, FooterCon,GradientBackgroundCon, FooterLink, RedSpan, QuoteGeneratorTitle, QuoteGeneratorInnerCon, GenerateQuoteButton, GenerateQuoteButtonText, QuoteGeneratorCon, QuoteGeneratorSubTitle } from '@/Components/QuoteGenerator/QuoteGeneratorElements'

// Assets
import Clouds1 from '../Assets/cloud-and-thunder.png'
import Clouds2 from '../Assets/cloudy-weather.png'
export default function Home() {
  const [numberOfQuotes, setNumberOfQuotes] = useState<Number | null>(0);

  return (
    <>
      <Head>
        <title>Inspirational Quote Generator</title>
        <meta name="description" content="A project to generate inspo quotes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Background */}
      <GradientBackgroundCon>
      {/*Quote Generator Modal*/}
      {/* <QuoteGeneratorModal
      />*/}

          {/* Quote Generator */}
          <QuoteGeneratorCon>
          <QuoteGeneratorInnerCon>
            <QuoteGeneratorTitle>
              Daily Inspiration Generator
            </QuoteGeneratorTitle>

            <QuoteGeneratorSubTitle>
              Looking for a splash of inspiration? Generate a quote card with a random inspirational quote provided by 
              <FooterLink href="https://zenquotes.io/" target="_blank" rel="noopener noreferrer">ZenQuotes API</FooterLink>.
            </QuoteGeneratorSubTitle>

            <GenerateQuoteButton>
              <GenerateQuoteButtonText  onClick={null}>
                Make a Quote
              </GenerateQuoteButtonText>
            </GenerateQuoteButton>
          </QuoteGeneratorInnerCon>
        </QuoteGeneratorCon>




        {/* Background Images*/}

        <BackgroundImage1
        src = {Clouds1}
        height = "300"
        alt = "Cloudybackground1"
        />
        <BackgroundImage2
        src = {Clouds2}
        height = "300"
        alt = "Cloudybackground1"
        />
        {/* Footer */}
        <FooterCon>
          <>
          Quotes Generated: {numberOfQuotes}
          <br/>Developed with <RedSpan>♥</RedSpan> by<FooterLink href="https://github.com/krishydty" target="_blank" rel="noopener noreferrer"> @KrishnaYadati </FooterLink>
          </>
          
        </FooterCon>

      </GradientBackgroundCon>
    </>
  )
}
