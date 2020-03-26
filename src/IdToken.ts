// Open ID Connect specification: http://openid.net/specs/openid-connect-core-1_0.html#StandardClaims
import {JsonWebToken} from './JsonWebToken';
import {VerifyOptions} from 'jsonwebtoken';

// tslint:disable:max-line-length
export interface IdTokenPayload {
    // Attributes defined by OpenID
    address?: object; // End-User's preferred postal address. The value of the address member is a JSON [RFC4627] structure containing some or all of the members defined in Section 5.1.1.
    birthdate?: string; // End-User's birthday, represented as an ISO 8601:2004 [ISO8601‑2004] YYYY-MM-DD format. The year MAY be 0000, indicating that it is omitted. To represent only the year, YYYY format is allowed. Note that depending on the underlying platform's date related function, providing just year can result in varying month and day, so the implementers need to take this factor into account to correctly process the dates.
    email?: string; // End-User's preferred e-mail address. Its value MUST conform to the RFC 5322 [RFC5322] addr-spec syntax. The RP MUST NOT rely upon this value being unique, as discussed in Section 5.7.
    email_verified?: boolean; // True if the End-User's e-mail address has been verified; otherwise false. When this Claim Value is true, this means that the OP took affirmative steps to ensure that this e-mail address was controlled by the End-User at the time the verification was performed. The means by which an e-mail address is verified is context-specific, and dependent upon the trust framework or contractual agreements within which the parties are operating.
    family_name?: string;	// Surname(s) or last name(s) of the End-User. Note that in some cultures, people can have multiple family names or no family name; all can be present, with the names being separated by space characters.
    gender?: string; // End-User's gender. Values defined by this specification are female and male. Other values MAY be used when neither of the defined values are applicable.
    given_name?: string;	// Given name(s) or first name(s) of the End-User. Note that in some cultures, people can have multiple given names; all can be present, with the names being separated by space characters.
    locale?: string; // End-User's locale, represented as a BCP47 [RFC5646] language tag. This is typically an ISO 639-1 Alpha-2 [ISO639‑1] language code in lowercase and an ISO 3166-1 Alpha-2 [ISO3166‑1] country code in uppercase, separated by a dash. For example, en-US or fr-CA. As a compatibility note, some implementations have used an underscore as the separator rather than a dash, for example, en_US; Relying Parties MAY choose to accept this locale syntax as well.
    middle_name?: string;	// Middle name(s) of the End-User. Note that in some cultures, people can have multiple middle names; all can be present, with the names being separated by space characters. Also note that in some cultures, middle names are not used.
    name?: string;	// End-User's full name in displayable form including all name parts, possibly including titles and suffixes, ordered according to the End-User's locale and preferences.
    nickname?: string;	// Casual name of the End-User that may or may not be the same as the given_name. For instance, a nickname value of Mike might be returned alongside a given_name value of Michael.
    phone_number?: string; // End-User's preferred telephone number. E.164 [E.164] is RECOMMENDED as the format of this Claim, for example, +1 (425) 555-1212 or +56 (2) 687 2400. If the phone number contains an extension, it is RECOMMENDED that the extension be represented using the RFC 3966 [RFC3966] extension syntax, for example, +1 (604) 555-1234;ext=5678.
    phone_number_verified?: boolean;   // True if the End-User's phone number has been verified; otherwise false. When this Claim Value is true, this means that the OP took affirmative steps to ensure that this phone number was controlled by the End-User at the time the verification was performed. The means by which a phone number is verified is context-specific, and dependent upon the trust framework or contractual agreements within which the parties are operating. When true, the phone_number Claim MUST be in E.164 format and any extensions MUST be represented in RFC 3966 format.
    picture?: string;	// URL of the End-User's profile picture. This URL MUST refer to an image file (for example, a PNG, JPEG, or GIF image file), rather than to a Web page containing an image. Note that this URL SHOULD specifically reference a profile photo of the End-User suitable for displaying when describing the End-User, rather than an arbitrary photo taken by the End-User.
    preferred_username?: string;	// Shorthand name by which the End-User wishes to be referred to at the RP, such as janedoe or j.doe. This value MAY be any valid JSON string including special characters such as @, /, or whitespace. The RP MUST NOT rely upon this value being unique, as discussed in Section 5.7.
    profile?: string;	// URL of the End-User's profile page. The contents of this Web page SHOULD be about the End-User.
    sub?: string;   // Subject - Identifier for the End-User at the Issuer.
    updated_at?: number; // Time the End-User's information was last updated. Its value is a JSON number representing the number of seconds from 1970-01-01T0:0:0Z as measured in UTC until the date/time.
    website?: string; // URL of the End-User's Web page or blog. This Web page SHOULD contain information published by the End-User or an organization that the End-User is affiliated with.
    zoneinfo?: string; // String from zoneinfo [zoneinfo] time zone database representing the End-User's time zone. For example, Europe/Paris or America/Los_Angeles.

}

/** @class */
export class IdToken extends JsonWebToken {

    /**
     * Constructs a new CognitoJwtToken object
     * @param {string} token The JWT token.
     * @param {string} [pem]
     * @param {VerifyOptions} [options]
     */
    constructor(
        token: string,
        protected pem?: string,
        options?: VerifyOptions,
    ) {
        super(token, pem, options);
    }

    /**
     * Get the JWT payload
     * @returns {IdTokenPayload}
     */
    getIdTokenPayload(): IdTokenPayload {
        return super.getJwtPayload<IdTokenPayload>();
    }

    /**
     * Get the user's address
     * @returns {Object}
     */
    get address(): object {
        return this.getIdTokenPayload().address;
    }

    /**
     * Get the user's birthdate represented as an ISO 8601:2004 [ISO8601‑2004] YYYY-MM-DD format.
     * @returns {string}
     */
    get birthdate(): string {
        return this.getIdTokenPayload().birthdate;
    }

    /**
     * Get the user's email address
     * @returns {string}
     */
    get email(): string {
        return this.getIdTokenPayload().email;
    }

    /**
     * Closed question if email address has been verified.
     * @returns {boolean}
     */
    get email_verified(): boolean {
        return this.getIdTokenPayload().email_verified;
    }

    /**
     * Get the user's family name.
     * @returns {string}
     */
    get family_name(): string {
        return this.getIdTokenPayload().family_name;
    }

    /**
     * Get the user's gender
     * @returns {string}
     */
    get gender(): string {
        return this.getIdTokenPayload().gender;
    }

    /**
     * Get the user's given name.
     * @returns {string}
     */
    get given_name(): string {
        return this.getIdTokenPayload().given_name;
    }

    /**
     * Get the user's locale.
     * @returns {string}
     */
    get locale(): string {
        return this.getIdTokenPayload().locale;
    }

    /**
     * Get the user's middle name.
     * @returns {string}
     */
    get middle_name(): string {
        return this.getIdTokenPayload().middle_name;
    }

    /**
     * Get the user's full name.
     * @returns {string}
     */
    get name(): string {
        return this.getIdTokenPayload().name;
    }

    /**
     * Get the user's nickname.
     * @returns {string}
     */
    get nickname(): string {
        return this.getIdTokenPayload().nickname;
    }

    /**
     * Get the user's phone number.
     * @returns {string}
     */
    get phone_number(): string {
        return this.getIdTokenPayload().phone_number;
    }

    /**
     * Closed question asking if phone number has been verified.
     * @returns {boolean}
     */
    get phone_number_verified(): boolean {
        return this.getIdTokenPayload().phone_number_verified;
    }

    /**
     * Get a URL to the user's picture.
     * @returns {string}
     */
    get picture(): string {
        return this.getIdTokenPayload().picture;
    }

    /**
     * Get the user's preferred name.
     * @returns {string}
     */
    get preferred_username(): string {
        return this.getIdTokenPayload().preferred_username;
    }

    get profile(): string {
        return this.getIdTokenPayload().profile;
    }

    get sub(): string {
        return this.getIdTokenPayload().sub;
    }

    get updated_at(): number {
        return this.getIdTokenPayload().updated_at;
    }

    get website(): string {
        return this.getIdTokenPayload().website;
    }

    get zoneinfo(): string {
        return this.getIdTokenPayload().zoneinfo;
    }

}
