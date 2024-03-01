import { Injectable } from '@nestjs/common'

import { PassportStrategy } from '@nestjs/passport'
import { Strategy, VerifyCallback } from 'passport-google-oauth20'

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID: 'keydeprueba',
      clientSecret: 'AIzaSyD77t9woz8hFSvgoeNsQbFou68VZZsDJ70',
      callbackURL: 'google/callback',
      scope: ['profile', 'email']
    })
  }

  async validate(
    _accessToken: string,
    _refreshToken: string,
    profile: any,
    done: VerifyCallback
  ): Promise<any> {
    const { id, name, emails, photos } = profile

    const user = {
      provider: 'google',
      providerId: id,
      email: emails[0].value,
      name: `${name.givenName} ${name.familyName}`,
      picture: photos[0].value
    }

    done(null, user)
  }
}
