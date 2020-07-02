const {
    PHASE_DEVELOPMENT_SERVER,
    PHASE_PRODUCTION_BUILD,
  } = require('next/constants')
  
  // This uses phases as outlined here: https://nextjs.org/docs/#custom-configuration
  module.exports = (phase) => {
    const isDev = phase === PHASE_DEVELOPMENT_SERVER
    const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'
    const isStaging = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1'
  
    console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`)
  
    const env = {
        RESTURL: (() => {
            if (isDev) {
                return 'http://localhost:8080/'
            }
            if (isProd) {
                return 'https://jchai.tech/api'
            }
        })(),
        RECAPTCHA_SITEKEY: (()=>{
            return '6LdtRawZAAAAAEluZgHqnNg-h-2J0aP8etHCTPk4';
        })(),
    }
  
    return {
      env,
    }
  }
