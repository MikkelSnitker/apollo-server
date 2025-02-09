import * as Long from "long";

import * as $protobuf from "@apollo/protobufjs";
/** Properties of a Trace. */
export interface ITrace {

    /** Trace startTime */
    startTime?: (google.protobuf.ITimestamp|null);

    /** Trace endTime */
    endTime?: (google.protobuf.ITimestamp|null);

    /** Trace durationNs */
    durationNs?: (number|null);

    /** Trace root */
    root?: (Trace.INode|null);

    /** Trace signature */
    signature?: (string|null);

    /** Trace details */
    details?: (Trace.IDetails|null);

    /** Trace clientName */
    clientName?: (string|null);

    /** Trace clientVersion */
    clientVersion?: (string|null);

    /** Trace clientAddress */
    clientAddress?: (string|null);

    /** Trace clientReferenceId */
    clientReferenceId?: (string|null);

    /** Trace http */
    http?: (Trace.IHTTP|null);

    /** Trace cachePolicy */
    cachePolicy?: (Trace.ICachePolicy|null);

    /** Trace queryPlan */
    queryPlan?: (Trace.IQueryPlanNode|null);

    /** Trace fullQueryCacheHit */
    fullQueryCacheHit?: (boolean|null);

    /** Trace persistedQueryHit */
    persistedQueryHit?: (boolean|null);

    /** Trace persistedQueryRegister */
    persistedQueryRegister?: (boolean|null);

    /** Trace registeredOperation */
    registeredOperation?: (boolean|null);

    /** Trace forbiddenOperation */
    forbiddenOperation?: (boolean|null);

    /** Trace originReportedStartTime */
    originReportedStartTime?: (google.protobuf.ITimestamp|null);

    /** Trace originReportedEndTime */
    originReportedEndTime?: (google.protobuf.ITimestamp|null);

    /** Trace originReportedDurationNs */
    originReportedDurationNs?: (number|null);

    /** Trace legacySignatureNeedsResigning */
    legacySignatureNeedsResigning?: (string|null);
}

/** Represents a Trace. */
export class Trace implements ITrace {

    /**
     * Constructs a new Trace.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITrace);

    /** Trace startTime. */
    public startTime?: (google.protobuf.ITimestamp|null);

    /** Trace endTime. */
    public endTime?: (google.protobuf.ITimestamp|null);

    /** Trace durationNs. */
    public durationNs: number;

    /** Trace root. */
    public root?: (Trace.INode|null);

    /** Trace signature. */
    public signature: string;

    /** Trace details. */
    public details?: (Trace.IDetails|null);

    /** Trace clientName. */
    public clientName: string;

    /** Trace clientVersion. */
    public clientVersion: string;

    /** Trace clientAddress. */
    public clientAddress: string;

    /** Trace clientReferenceId. */
    public clientReferenceId: string;

    /** Trace http. */
    public http?: (Trace.IHTTP|null);

    /** Trace cachePolicy. */
    public cachePolicy?: (Trace.ICachePolicy|null);

    /** Trace queryPlan. */
    public queryPlan?: (Trace.IQueryPlanNode|null);

    /** Trace fullQueryCacheHit. */
    public fullQueryCacheHit: boolean;

    /** Trace persistedQueryHit. */
    public persistedQueryHit: boolean;

    /** Trace persistedQueryRegister. */
    public persistedQueryRegister: boolean;

    /** Trace registeredOperation. */
    public registeredOperation: boolean;

    /** Trace forbiddenOperation. */
    public forbiddenOperation: boolean;

    /** Trace originReportedStartTime. */
    public originReportedStartTime?: (google.protobuf.ITimestamp|null);

    /** Trace originReportedEndTime. */
    public originReportedEndTime?: (google.protobuf.ITimestamp|null);

    /** Trace originReportedDurationNs. */
    public originReportedDurationNs: number;

    /** Trace legacySignatureNeedsResigning. */
    public legacySignatureNeedsResigning: string;

    /**
     * Creates a new Trace instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Trace instance
     */
    public static create(properties?: ITrace): Trace;

    /**
     * Encodes the specified Trace message. Does not implicitly {@link Trace.verify|verify} messages.
     * @param message Trace message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITrace, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Trace message, length delimited. Does not implicitly {@link Trace.verify|verify} messages.
     * @param message Trace message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITrace, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Trace message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Trace
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Trace;

    /**
     * Decodes a Trace message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Trace
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Trace;

    /**
     * Verifies a Trace message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Trace message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Trace
     */
    public static fromObject(object: { [k: string]: any }): Trace;

    /**
     * Creates a plain object from a Trace message. Also converts values to other types if specified.
     * @param message Trace
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Trace, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Trace to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace Trace {

    /** Properties of a CachePolicy. */
    interface ICachePolicy {

        /** CachePolicy scope */
        scope?: (Trace.CachePolicy.Scope|null);

        /** CachePolicy maxAgeNs */
        maxAgeNs?: (number|null);
    }

    /** Represents a CachePolicy. */
    class CachePolicy implements ICachePolicy {

        /**
         * Constructs a new CachePolicy.
         * @param [properties] Properties to set
         */
        constructor(properties?: Trace.ICachePolicy);

        /** CachePolicy scope. */
        public scope: Trace.CachePolicy.Scope;

        /** CachePolicy maxAgeNs. */
        public maxAgeNs: number;

        /**
         * Creates a new CachePolicy instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CachePolicy instance
         */
        public static create(properties?: Trace.ICachePolicy): Trace.CachePolicy;

        /**
         * Encodes the specified CachePolicy message. Does not implicitly {@link Trace.CachePolicy.verify|verify} messages.
         * @param message CachePolicy message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Trace.ICachePolicy, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CachePolicy message, length delimited. Does not implicitly {@link Trace.CachePolicy.verify|verify} messages.
         * @param message CachePolicy message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Trace.ICachePolicy, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CachePolicy message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CachePolicy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Trace.CachePolicy;

        /**
         * Decodes a CachePolicy message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CachePolicy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Trace.CachePolicy;

        /**
         * Verifies a CachePolicy message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CachePolicy message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CachePolicy
         */
        public static fromObject(object: { [k: string]: any }): Trace.CachePolicy;

        /**
         * Creates a plain object from a CachePolicy message. Also converts values to other types if specified.
         * @param message CachePolicy
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Trace.CachePolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CachePolicy to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace CachePolicy {

        /** Scope enum. */
        enum Scope {
            UNKNOWN = 0,
            PUBLIC = 1,
            PRIVATE = 2
        }
    }

    /** Properties of a Details. */
    interface IDetails {

        /** Details variablesJson */
        variablesJson?: ({ [k: string]: string }|null);

        /** Details variables */
        variables?: ({ [k: string]: Uint8Array }|null);

        /** Details rawQuery */
        rawQuery?: (string|null);

        /** Details operationName */
        operationName?: (string|null);
    }

    /** Represents a Details. */
    class Details implements IDetails {

        /**
         * Constructs a new Details.
         * @param [properties] Properties to set
         */
        constructor(properties?: Trace.IDetails);

        /** Details variablesJson. */
        public variablesJson: { [k: string]: string };

        /** Details variables. */
        public variables: { [k: string]: Uint8Array };

        /** Details rawQuery. */
        public rawQuery: string;

        /** Details operationName. */
        public operationName: string;

        /**
         * Creates a new Details instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Details instance
         */
        public static create(properties?: Trace.IDetails): Trace.Details;

        /**
         * Encodes the specified Details message. Does not implicitly {@link Trace.Details.verify|verify} messages.
         * @param message Details message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Trace.IDetails, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Details message, length delimited. Does not implicitly {@link Trace.Details.verify|verify} messages.
         * @param message Details message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Trace.IDetails, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Details message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Details
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Trace.Details;

        /**
         * Decodes a Details message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Details
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Trace.Details;

        /**
         * Verifies a Details message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Details message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Details
         */
        public static fromObject(object: { [k: string]: any }): Trace.Details;

        /**
         * Creates a plain object from a Details message. Also converts values to other types if specified.
         * @param message Details
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Trace.Details, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Details to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Error. */
    interface IError {

        /** Error message */
        message?: (string|null);

        /** Error location */
        location?: (Trace.ILocation[]|null);

        /** Error timeNs */
        timeNs?: (number|null);

        /** Error json */
        json?: (string|null);
    }

    /** Represents an Error. */
    class Error implements IError {

        /**
         * Constructs a new Error.
         * @param [properties] Properties to set
         */
        constructor(properties?: Trace.IError);

        /** Error message. */
        public message: string;

        /** Error location. */
        public location: Trace.ILocation[];

        /** Error timeNs. */
        public timeNs: number;

        /** Error json. */
        public json: string;

        /**
         * Creates a new Error instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Error instance
         */
        public static create(properties?: Trace.IError): Trace.Error;

        /**
         * Encodes the specified Error message. Does not implicitly {@link Trace.Error.verify|verify} messages.
         * @param message Error message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Trace.IError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Error message, length delimited. Does not implicitly {@link Trace.Error.verify|verify} messages.
         * @param message Error message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Trace.IError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Error message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Trace.Error;

        /**
         * Decodes an Error message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Trace.Error;

        /**
         * Verifies an Error message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Error message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Error
         */
        public static fromObject(object: { [k: string]: any }): Trace.Error;

        /**
         * Creates a plain object from an Error message. Also converts values to other types if specified.
         * @param message Error
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Trace.Error, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Error to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HTTP. */
    interface IHTTP {

        /** HTTP method */
        method?: (Trace.HTTP.Method|null);

        /** HTTP host */
        host?: (string|null);

        /** HTTP path */
        path?: (string|null);

        /** HTTP requestHeaders */
        requestHeaders?: ({ [k: string]: Trace.HTTP.IValues }|null);

        /** HTTP responseHeaders */
        responseHeaders?: ({ [k: string]: Trace.HTTP.IValues }|null);

        /** HTTP statusCode */
        statusCode?: (number|null);

        /** HTTP secure */
        secure?: (boolean|null);

        /** HTTP protocol */
        protocol?: (string|null);
    }

    /** Represents a HTTP. */
    class HTTP implements IHTTP {

        /**
         * Constructs a new HTTP.
         * @param [properties] Properties to set
         */
        constructor(properties?: Trace.IHTTP);

        /** HTTP method. */
        public method: Trace.HTTP.Method;

        /** HTTP host. */
        public host: string;

        /** HTTP path. */
        public path: string;

        /** HTTP requestHeaders. */
        public requestHeaders: { [k: string]: Trace.HTTP.IValues };

        /** HTTP responseHeaders. */
        public responseHeaders: { [k: string]: Trace.HTTP.IValues };

        /** HTTP statusCode. */
        public statusCode: number;

        /** HTTP secure. */
        public secure: boolean;

        /** HTTP protocol. */
        public protocol: string;

        /**
         * Creates a new HTTP instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HTTP instance
         */
        public static create(properties?: Trace.IHTTP): Trace.HTTP;

        /**
         * Encodes the specified HTTP message. Does not implicitly {@link Trace.HTTP.verify|verify} messages.
         * @param message HTTP message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Trace.IHTTP, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HTTP message, length delimited. Does not implicitly {@link Trace.HTTP.verify|verify} messages.
         * @param message HTTP message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Trace.IHTTP, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HTTP message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HTTP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Trace.HTTP;

        /**
         * Decodes a HTTP message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HTTP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Trace.HTTP;

        /**
         * Verifies a HTTP message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HTTP message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HTTP
         */
        public static fromObject(object: { [k: string]: any }): Trace.HTTP;

        /**
         * Creates a plain object from a HTTP message. Also converts values to other types if specified.
         * @param message HTTP
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Trace.HTTP, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HTTP to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace HTTP {

        /** Properties of a Values. */
        interface IValues {

            /** Values value */
            value?: (string[]|null);
        }

        /** Represents a Values. */
        class Values implements IValues {

            /**
             * Constructs a new Values.
             * @param [properties] Properties to set
             */
            constructor(properties?: Trace.HTTP.IValues);

            /** Values value. */
            public value: string[];

            /**
             * Creates a new Values instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Values instance
             */
            public static create(properties?: Trace.HTTP.IValues): Trace.HTTP.Values;

            /**
             * Encodes the specified Values message. Does not implicitly {@link Trace.HTTP.Values.verify|verify} messages.
             * @param message Values message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Trace.HTTP.IValues, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Values message, length delimited. Does not implicitly {@link Trace.HTTP.Values.verify|verify} messages.
             * @param message Values message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Trace.HTTP.IValues, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Values message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Values
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Trace.HTTP.Values;

            /**
             * Decodes a Values message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Values
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Trace.HTTP.Values;

            /**
             * Verifies a Values message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Values message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Values
             */
            public static fromObject(object: { [k: string]: any }): Trace.HTTP.Values;

            /**
             * Creates a plain object from a Values message. Also converts values to other types if specified.
             * @param message Values
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Trace.HTTP.Values, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Values to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Method enum. */
        enum Method {
            UNKNOWN = 0,
            OPTIONS = 1,
            GET = 2,
            HEAD = 3,
            POST = 4,
            PUT = 5,
            DELETE = 6,
            TRACE = 7,
            CONNECT = 8,
            PATCH = 9
        }
    }

    /** Properties of a Location. */
    interface ILocation {

        /** Location line */
        line?: (number|null);

        /** Location column */
        column?: (number|null);
    }

    /** Represents a Location. */
    class Location implements ILocation {

        /**
         * Constructs a new Location.
         * @param [properties] Properties to set
         */
        constructor(properties?: Trace.ILocation);

        /** Location line. */
        public line: number;

        /** Location column. */
        public column: number;

        /**
         * Creates a new Location instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Location instance
         */
        public static create(properties?: Trace.ILocation): Trace.Location;

        /**
         * Encodes the specified Location message. Does not implicitly {@link Trace.Location.verify|verify} messages.
         * @param message Location message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Trace.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Location message, length delimited. Does not implicitly {@link Trace.Location.verify|verify} messages.
         * @param message Location message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Trace.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Location message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Location
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Trace.Location;

        /**
         * Decodes a Location message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Location
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Trace.Location;

        /**
         * Verifies a Location message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Location message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Location
         */
        public static fromObject(object: { [k: string]: any }): Trace.Location;

        /**
         * Creates a plain object from a Location message. Also converts values to other types if specified.
         * @param message Location
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Trace.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Location to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Node. */
    interface INode {

        /** Node responseName */
        responseName?: (string|null);

        /** Node index */
        index?: (number|null);

        /** Node originalFieldName */
        originalFieldName?: (string|null);

        /** Node type */
        type?: (string|null);

        /** Node parentType */
        parentType?: (string|null);

        /** Node cachePolicy */
        cachePolicy?: (Trace.ICachePolicy|null);

        /** Node startTime */
        startTime?: (number|null);

        /** Node endTime */
        endTime?: (number|null);

        /** Node error */
        error?: (Trace.IError[]|null);

        /** Node child */
        child?: (Trace.INode[]|null);
    }

    /** Represents a Node. */
    class Node implements INode {

        /**
         * Constructs a new Node.
         * @param [properties] Properties to set
         */
        constructor(properties?: Trace.INode);

        /** Node responseName. */
        public responseName: string;

        /** Node index. */
        public index: number;

        /** Node originalFieldName. */
        public originalFieldName: string;

        /** Node type. */
        public type: string;

        /** Node parentType. */
        public parentType: string;

        /** Node cachePolicy. */
        public cachePolicy?: (Trace.ICachePolicy|null);

        /** Node startTime. */
        public startTime: number;

        /** Node endTime. */
        public endTime: number;

        /** Node error. */
        public error: Trace.IError[];

        /** Node child. */
        public child: Trace.INode[];

        /** Node id. */
        public id?: ("responseName"|"index");

        /**
         * Creates a new Node instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Node instance
         */
        public static create(properties?: Trace.INode): Trace.Node;

        /**
         * Encodes the specified Node message. Does not implicitly {@link Trace.Node.verify|verify} messages.
         * @param message Node message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Trace.INode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Node message, length delimited. Does not implicitly {@link Trace.Node.verify|verify} messages.
         * @param message Node message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Trace.INode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Node message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Node
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Trace.Node;

        /**
         * Decodes a Node message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Node
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Trace.Node;

        /**
         * Verifies a Node message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Node message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Node
         */
        public static fromObject(object: { [k: string]: any }): Trace.Node;

        /**
         * Creates a plain object from a Node message. Also converts values to other types if specified.
         * @param message Node
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Trace.Node, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Node to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QueryPlanNode. */
    interface IQueryPlanNode {

        /** QueryPlanNode sequence */
        sequence?: (Trace.QueryPlanNode.ISequenceNode|null);

        /** QueryPlanNode parallel */
        parallel?: (Trace.QueryPlanNode.IParallelNode|null);

        /** QueryPlanNode fetch */
        fetch?: (Trace.QueryPlanNode.IFetchNode|null);

        /** QueryPlanNode flatten */
        flatten?: (Trace.QueryPlanNode.IFlattenNode|null);
    }

    /** Represents a QueryPlanNode. */
    class QueryPlanNode implements IQueryPlanNode {

        /**
         * Constructs a new QueryPlanNode.
         * @param [properties] Properties to set
         */
        constructor(properties?: Trace.IQueryPlanNode);

        /** QueryPlanNode sequence. */
        public sequence?: (Trace.QueryPlanNode.ISequenceNode|null);

        /** QueryPlanNode parallel. */
        public parallel?: (Trace.QueryPlanNode.IParallelNode|null);

        /** QueryPlanNode fetch. */
        public fetch?: (Trace.QueryPlanNode.IFetchNode|null);

        /** QueryPlanNode flatten. */
        public flatten?: (Trace.QueryPlanNode.IFlattenNode|null);

        /** QueryPlanNode node. */
        public node?: ("sequence"|"parallel"|"fetch"|"flatten");

        /**
         * Creates a new QueryPlanNode instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QueryPlanNode instance
         */
        public static create(properties?: Trace.IQueryPlanNode): Trace.QueryPlanNode;

        /**
         * Encodes the specified QueryPlanNode message. Does not implicitly {@link Trace.QueryPlanNode.verify|verify} messages.
         * @param message QueryPlanNode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Trace.IQueryPlanNode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QueryPlanNode message, length delimited. Does not implicitly {@link Trace.QueryPlanNode.verify|verify} messages.
         * @param message QueryPlanNode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Trace.IQueryPlanNode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QueryPlanNode message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QueryPlanNode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Trace.QueryPlanNode;

        /**
         * Decodes a QueryPlanNode message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QueryPlanNode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Trace.QueryPlanNode;

        /**
         * Verifies a QueryPlanNode message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QueryPlanNode message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QueryPlanNode
         */
        public static fromObject(object: { [k: string]: any }): Trace.QueryPlanNode;

        /**
         * Creates a plain object from a QueryPlanNode message. Also converts values to other types if specified.
         * @param message QueryPlanNode
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Trace.QueryPlanNode, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QueryPlanNode to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace QueryPlanNode {

        /** Properties of a SequenceNode. */
        interface ISequenceNode {

            /** SequenceNode nodes */
            nodes?: (Trace.IQueryPlanNode[]|null);
        }

        /** Represents a SequenceNode. */
        class SequenceNode implements ISequenceNode {

            /**
             * Constructs a new SequenceNode.
             * @param [properties] Properties to set
             */
            constructor(properties?: Trace.QueryPlanNode.ISequenceNode);

            /** SequenceNode nodes. */
            public nodes: Trace.IQueryPlanNode[];

            /**
             * Creates a new SequenceNode instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SequenceNode instance
             */
            public static create(properties?: Trace.QueryPlanNode.ISequenceNode): Trace.QueryPlanNode.SequenceNode;

            /**
             * Encodes the specified SequenceNode message. Does not implicitly {@link Trace.QueryPlanNode.SequenceNode.verify|verify} messages.
             * @param message SequenceNode message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Trace.QueryPlanNode.ISequenceNode, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SequenceNode message, length delimited. Does not implicitly {@link Trace.QueryPlanNode.SequenceNode.verify|verify} messages.
             * @param message SequenceNode message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Trace.QueryPlanNode.ISequenceNode, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SequenceNode message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SequenceNode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Trace.QueryPlanNode.SequenceNode;

            /**
             * Decodes a SequenceNode message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SequenceNode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Trace.QueryPlanNode.SequenceNode;

            /**
             * Verifies a SequenceNode message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SequenceNode message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SequenceNode
             */
            public static fromObject(object: { [k: string]: any }): Trace.QueryPlanNode.SequenceNode;

            /**
             * Creates a plain object from a SequenceNode message. Also converts values to other types if specified.
             * @param message SequenceNode
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Trace.QueryPlanNode.SequenceNode, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SequenceNode to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ParallelNode. */
        interface IParallelNode {

            /** ParallelNode nodes */
            nodes?: (Trace.IQueryPlanNode[]|null);
        }

        /** Represents a ParallelNode. */
        class ParallelNode implements IParallelNode {

            /**
             * Constructs a new ParallelNode.
             * @param [properties] Properties to set
             */
            constructor(properties?: Trace.QueryPlanNode.IParallelNode);

            /** ParallelNode nodes. */
            public nodes: Trace.IQueryPlanNode[];

            /**
             * Creates a new ParallelNode instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ParallelNode instance
             */
            public static create(properties?: Trace.QueryPlanNode.IParallelNode): Trace.QueryPlanNode.ParallelNode;

            /**
             * Encodes the specified ParallelNode message. Does not implicitly {@link Trace.QueryPlanNode.ParallelNode.verify|verify} messages.
             * @param message ParallelNode message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Trace.QueryPlanNode.IParallelNode, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ParallelNode message, length delimited. Does not implicitly {@link Trace.QueryPlanNode.ParallelNode.verify|verify} messages.
             * @param message ParallelNode message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Trace.QueryPlanNode.IParallelNode, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ParallelNode message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ParallelNode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Trace.QueryPlanNode.ParallelNode;

            /**
             * Decodes a ParallelNode message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ParallelNode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Trace.QueryPlanNode.ParallelNode;

            /**
             * Verifies a ParallelNode message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ParallelNode message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ParallelNode
             */
            public static fromObject(object: { [k: string]: any }): Trace.QueryPlanNode.ParallelNode;

            /**
             * Creates a plain object from a ParallelNode message. Also converts values to other types if specified.
             * @param message ParallelNode
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Trace.QueryPlanNode.ParallelNode, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ParallelNode to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FetchNode. */
        interface IFetchNode {

            /** FetchNode serviceName */
            serviceName?: (string|null);

            /** FetchNode traceParsingFailed */
            traceParsingFailed?: (boolean|null);

            /** FetchNode trace */
            trace?: (ITrace|null);

            /** FetchNode sentTimeOffset */
            sentTimeOffset?: (number|null);

            /** FetchNode sentTime */
            sentTime?: (google.protobuf.ITimestamp|null);

            /** FetchNode receivedTime */
            receivedTime?: (google.protobuf.ITimestamp|null);
        }

        /** Represents a FetchNode. */
        class FetchNode implements IFetchNode {

            /**
             * Constructs a new FetchNode.
             * @param [properties] Properties to set
             */
            constructor(properties?: Trace.QueryPlanNode.IFetchNode);

            /** FetchNode serviceName. */
            public serviceName: string;

            /** FetchNode traceParsingFailed. */
            public traceParsingFailed: boolean;

            /** FetchNode trace. */
            public trace?: (ITrace|null);

            /** FetchNode sentTimeOffset. */
            public sentTimeOffset: number;

            /** FetchNode sentTime. */
            public sentTime?: (google.protobuf.ITimestamp|null);

            /** FetchNode receivedTime. */
            public receivedTime?: (google.protobuf.ITimestamp|null);

            /**
             * Creates a new FetchNode instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FetchNode instance
             */
            public static create(properties?: Trace.QueryPlanNode.IFetchNode): Trace.QueryPlanNode.FetchNode;

            /**
             * Encodes the specified FetchNode message. Does not implicitly {@link Trace.QueryPlanNode.FetchNode.verify|verify} messages.
             * @param message FetchNode message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Trace.QueryPlanNode.IFetchNode, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FetchNode message, length delimited. Does not implicitly {@link Trace.QueryPlanNode.FetchNode.verify|verify} messages.
             * @param message FetchNode message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Trace.QueryPlanNode.IFetchNode, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FetchNode message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FetchNode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Trace.QueryPlanNode.FetchNode;

            /**
             * Decodes a FetchNode message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FetchNode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Trace.QueryPlanNode.FetchNode;

            /**
             * Verifies a FetchNode message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FetchNode message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FetchNode
             */
            public static fromObject(object: { [k: string]: any }): Trace.QueryPlanNode.FetchNode;

            /**
             * Creates a plain object from a FetchNode message. Also converts values to other types if specified.
             * @param message FetchNode
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Trace.QueryPlanNode.FetchNode, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FetchNode to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FlattenNode. */
        interface IFlattenNode {

            /** FlattenNode responsePath */
            responsePath?: (Trace.QueryPlanNode.IResponsePathElement[]|null);

            /** FlattenNode node */
            node?: (Trace.IQueryPlanNode|null);
        }

        /** Represents a FlattenNode. */
        class FlattenNode implements IFlattenNode {

            /**
             * Constructs a new FlattenNode.
             * @param [properties] Properties to set
             */
            constructor(properties?: Trace.QueryPlanNode.IFlattenNode);

            /** FlattenNode responsePath. */
            public responsePath: Trace.QueryPlanNode.IResponsePathElement[];

            /** FlattenNode node. */
            public node?: (Trace.IQueryPlanNode|null);

            /**
             * Creates a new FlattenNode instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FlattenNode instance
             */
            public static create(properties?: Trace.QueryPlanNode.IFlattenNode): Trace.QueryPlanNode.FlattenNode;

            /**
             * Encodes the specified FlattenNode message. Does not implicitly {@link Trace.QueryPlanNode.FlattenNode.verify|verify} messages.
             * @param message FlattenNode message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Trace.QueryPlanNode.IFlattenNode, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FlattenNode message, length delimited. Does not implicitly {@link Trace.QueryPlanNode.FlattenNode.verify|verify} messages.
             * @param message FlattenNode message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Trace.QueryPlanNode.IFlattenNode, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FlattenNode message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FlattenNode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Trace.QueryPlanNode.FlattenNode;

            /**
             * Decodes a FlattenNode message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FlattenNode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Trace.QueryPlanNode.FlattenNode;

            /**
             * Verifies a FlattenNode message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FlattenNode message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FlattenNode
             */
            public static fromObject(object: { [k: string]: any }): Trace.QueryPlanNode.FlattenNode;

            /**
             * Creates a plain object from a FlattenNode message. Also converts values to other types if specified.
             * @param message FlattenNode
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Trace.QueryPlanNode.FlattenNode, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FlattenNode to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResponsePathElement. */
        interface IResponsePathElement {

            /** ResponsePathElement fieldName */
            fieldName?: (string|null);

            /** ResponsePathElement index */
            index?: (number|null);
        }

        /** Represents a ResponsePathElement. */
        class ResponsePathElement implements IResponsePathElement {

            /**
             * Constructs a new ResponsePathElement.
             * @param [properties] Properties to set
             */
            constructor(properties?: Trace.QueryPlanNode.IResponsePathElement);

            /** ResponsePathElement fieldName. */
            public fieldName: string;

            /** ResponsePathElement index. */
            public index: number;

            /** ResponsePathElement id. */
            public id?: ("fieldName"|"index");

            /**
             * Creates a new ResponsePathElement instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResponsePathElement instance
             */
            public static create(properties?: Trace.QueryPlanNode.IResponsePathElement): Trace.QueryPlanNode.ResponsePathElement;

            /**
             * Encodes the specified ResponsePathElement message. Does not implicitly {@link Trace.QueryPlanNode.ResponsePathElement.verify|verify} messages.
             * @param message ResponsePathElement message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Trace.QueryPlanNode.IResponsePathElement, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponsePathElement message, length delimited. Does not implicitly {@link Trace.QueryPlanNode.ResponsePathElement.verify|verify} messages.
             * @param message ResponsePathElement message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Trace.QueryPlanNode.IResponsePathElement, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponsePathElement message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponsePathElement
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Trace.QueryPlanNode.ResponsePathElement;

            /**
             * Decodes a ResponsePathElement message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponsePathElement
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Trace.QueryPlanNode.ResponsePathElement;

            /**
             * Verifies a ResponsePathElement message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResponsePathElement message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponsePathElement
             */
            public static fromObject(object: { [k: string]: any }): Trace.QueryPlanNode.ResponsePathElement;

            /**
             * Creates a plain object from a ResponsePathElement message. Also converts values to other types if specified.
             * @param message ResponsePathElement
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Trace.QueryPlanNode.ResponsePathElement, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponsePathElement to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}

/** Properties of a ReportHeader. */
export interface IReportHeader {

    /** ReportHeader service */
    service?: (string|null);

    /** ReportHeader hostname */
    hostname?: (string|null);

    /** ReportHeader agentVersion */
    agentVersion?: (string|null);

    /** ReportHeader serviceVersion */
    serviceVersion?: (string|null);

    /** ReportHeader runtimeVersion */
    runtimeVersion?: (string|null);

    /** ReportHeader uname */
    uname?: (string|null);

    /** ReportHeader schemaTag */
    schemaTag?: (string|null);

    /** ReportHeader schemaHash */
    schemaHash?: (string|null);
}

/** Represents a ReportHeader. */
export class ReportHeader implements IReportHeader {

    /**
     * Constructs a new ReportHeader.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReportHeader);

    /** ReportHeader service. */
    public service: string;

    /** ReportHeader hostname. */
    public hostname: string;

    /** ReportHeader agentVersion. */
    public agentVersion: string;

    /** ReportHeader serviceVersion. */
    public serviceVersion: string;

    /** ReportHeader runtimeVersion. */
    public runtimeVersion: string;

    /** ReportHeader uname. */
    public uname: string;

    /** ReportHeader schemaTag. */
    public schemaTag: string;

    /** ReportHeader schemaHash. */
    public schemaHash: string;

    /**
     * Creates a new ReportHeader instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReportHeader instance
     */
    public static create(properties?: IReportHeader): ReportHeader;

    /**
     * Encodes the specified ReportHeader message. Does not implicitly {@link ReportHeader.verify|verify} messages.
     * @param message ReportHeader message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReportHeader, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReportHeader message, length delimited. Does not implicitly {@link ReportHeader.verify|verify} messages.
     * @param message ReportHeader message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReportHeader, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReportHeader message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReportHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReportHeader;

    /**
     * Decodes a ReportHeader message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReportHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReportHeader;

    /**
     * Verifies a ReportHeader message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReportHeader message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReportHeader
     */
    public static fromObject(object: { [k: string]: any }): ReportHeader;

    /**
     * Creates a plain object from a ReportHeader message. Also converts values to other types if specified.
     * @param message ReportHeader
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReportHeader, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReportHeader to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PathErrorStats. */
export interface IPathErrorStats {

    /** PathErrorStats children */
    children?: ({ [k: string]: IPathErrorStats }|null);

    /** PathErrorStats errorsCount */
    errorsCount?: (number|null);

    /** PathErrorStats requestsWithErrorsCount */
    requestsWithErrorsCount?: (number|null);
}

/** Represents a PathErrorStats. */
export class PathErrorStats implements IPathErrorStats {

    /**
     * Constructs a new PathErrorStats.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPathErrorStats);

    /** PathErrorStats children. */
    public children: { [k: string]: IPathErrorStats };

    /** PathErrorStats errorsCount. */
    public errorsCount: number;

    /** PathErrorStats requestsWithErrorsCount. */
    public requestsWithErrorsCount: number;

    /**
     * Creates a new PathErrorStats instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PathErrorStats instance
     */
    public static create(properties?: IPathErrorStats): PathErrorStats;

    /**
     * Encodes the specified PathErrorStats message. Does not implicitly {@link PathErrorStats.verify|verify} messages.
     * @param message PathErrorStats message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPathErrorStats, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PathErrorStats message, length delimited. Does not implicitly {@link PathErrorStats.verify|verify} messages.
     * @param message PathErrorStats message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPathErrorStats, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PathErrorStats message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PathErrorStats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PathErrorStats;

    /**
     * Decodes a PathErrorStats message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PathErrorStats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PathErrorStats;

    /**
     * Verifies a PathErrorStats message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PathErrorStats message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PathErrorStats
     */
    public static fromObject(object: { [k: string]: any }): PathErrorStats;

    /**
     * Creates a plain object from a PathErrorStats message. Also converts values to other types if specified.
     * @param message PathErrorStats
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PathErrorStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PathErrorStats to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ClientNameStats. */
export interface IClientNameStats {

    /** ClientNameStats latencyCount */
    latencyCount?: (number[]|null);

    /** ClientNameStats requestsCountPerVersion */
    requestsCountPerVersion?: ({ [k: string]: number }|null);

    /** ClientNameStats cacheHitsPerVersion */
    cacheHitsPerVersion?: ({ [k: string]: number }|null);

    /** ClientNameStats persistedQueryHitsPerVersion */
    persistedQueryHitsPerVersion?: ({ [k: string]: number }|null);

    /** ClientNameStats persistedQueryMissesPerVersion */
    persistedQueryMissesPerVersion?: ({ [k: string]: number }|null);

    /** ClientNameStats registeredOperationCountPerVersion */
    registeredOperationCountPerVersion?: ({ [k: string]: number }|null);

    /** ClientNameStats forbiddenOperationCountPerVersion */
    forbiddenOperationCountPerVersion?: ({ [k: string]: number }|null);

    /** ClientNameStats cacheLatencyCount */
    cacheLatencyCount?: (number[]|null);

    /** ClientNameStats rootErrorStats */
    rootErrorStats?: (IPathErrorStats|null);

    /** ClientNameStats requestsWithErrorsCount */
    requestsWithErrorsCount?: (number|null);

    /** ClientNameStats publicCacheTtlCount */
    publicCacheTtlCount?: (number[]|null);

    /** ClientNameStats privateCacheTtlCount */
    privateCacheTtlCount?: (number[]|null);
}

/** Represents a ClientNameStats. */
export class ClientNameStats implements IClientNameStats {

    /**
     * Constructs a new ClientNameStats.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientNameStats);

    /** ClientNameStats latencyCount. */
    public latencyCount: number[];

    /** ClientNameStats requestsCountPerVersion. */
    public requestsCountPerVersion: { [k: string]: number };

    /** ClientNameStats cacheHitsPerVersion. */
    public cacheHitsPerVersion: { [k: string]: number };

    /** ClientNameStats persistedQueryHitsPerVersion. */
    public persistedQueryHitsPerVersion: { [k: string]: number };

    /** ClientNameStats persistedQueryMissesPerVersion. */
    public persistedQueryMissesPerVersion: { [k: string]: number };

    /** ClientNameStats registeredOperationCountPerVersion. */
    public registeredOperationCountPerVersion: { [k: string]: number };

    /** ClientNameStats forbiddenOperationCountPerVersion. */
    public forbiddenOperationCountPerVersion: { [k: string]: number };

    /** ClientNameStats cacheLatencyCount. */
    public cacheLatencyCount: number[];

    /** ClientNameStats rootErrorStats. */
    public rootErrorStats?: (IPathErrorStats|null);

    /** ClientNameStats requestsWithErrorsCount. */
    public requestsWithErrorsCount: number;

    /** ClientNameStats publicCacheTtlCount. */
    public publicCacheTtlCount: number[];

    /** ClientNameStats privateCacheTtlCount. */
    public privateCacheTtlCount: number[];

    /**
     * Creates a new ClientNameStats instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientNameStats instance
     */
    public static create(properties?: IClientNameStats): ClientNameStats;

    /**
     * Encodes the specified ClientNameStats message. Does not implicitly {@link ClientNameStats.verify|verify} messages.
     * @param message ClientNameStats message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientNameStats, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientNameStats message, length delimited. Does not implicitly {@link ClientNameStats.verify|verify} messages.
     * @param message ClientNameStats message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClientNameStats, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClientNameStats message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientNameStats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClientNameStats;

    /**
     * Decodes a ClientNameStats message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientNameStats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ClientNameStats;

    /**
     * Verifies a ClientNameStats message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ClientNameStats message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientNameStats
     */
    public static fromObject(object: { [k: string]: any }): ClientNameStats;

    /**
     * Creates a plain object from a ClientNameStats message. Also converts values to other types if specified.
     * @param message ClientNameStats
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ClientNameStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ClientNameStats to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a QueryLatencyStats. */
export interface IQueryLatencyStats {

    /** QueryLatencyStats latencyCount */
    latencyCount?: (number[]|null);

    /** QueryLatencyStats requestCount */
    requestCount?: (number|null);

    /** QueryLatencyStats cacheHits */
    cacheHits?: (number|null);

    /** QueryLatencyStats persistedQueryHits */
    persistedQueryHits?: (number|null);

    /** QueryLatencyStats persistedQueryMisses */
    persistedQueryMisses?: (number|null);

    /** QueryLatencyStats cacheLatencyCount */
    cacheLatencyCount?: (number[]|null);

    /** QueryLatencyStats rootErrorStats */
    rootErrorStats?: (IPathErrorStats|null);

    /** QueryLatencyStats requestsWithErrorsCount */
    requestsWithErrorsCount?: (number|null);

    /** QueryLatencyStats publicCacheTtlCount */
    publicCacheTtlCount?: (number[]|null);

    /** QueryLatencyStats privateCacheTtlCount */
    privateCacheTtlCount?: (number[]|null);

    /** QueryLatencyStats registeredOperationCount */
    registeredOperationCount?: (number|null);

    /** QueryLatencyStats forbiddenOperationCount */
    forbiddenOperationCount?: (number|null);
}

/** Represents a QueryLatencyStats. */
export class QueryLatencyStats implements IQueryLatencyStats {

    /**
     * Constructs a new QueryLatencyStats.
     * @param [properties] Properties to set
     */
    constructor(properties?: IQueryLatencyStats);

    /** QueryLatencyStats latencyCount. */
    public latencyCount: number[];

    /** QueryLatencyStats requestCount. */
    public requestCount: number;

    /** QueryLatencyStats cacheHits. */
    public cacheHits: number;

    /** QueryLatencyStats persistedQueryHits. */
    public persistedQueryHits: number;

    /** QueryLatencyStats persistedQueryMisses. */
    public persistedQueryMisses: number;

    /** QueryLatencyStats cacheLatencyCount. */
    public cacheLatencyCount: number[];

    /** QueryLatencyStats rootErrorStats. */
    public rootErrorStats?: (IPathErrorStats|null);

    /** QueryLatencyStats requestsWithErrorsCount. */
    public requestsWithErrorsCount: number;

    /** QueryLatencyStats publicCacheTtlCount. */
    public publicCacheTtlCount: number[];

    /** QueryLatencyStats privateCacheTtlCount. */
    public privateCacheTtlCount: number[];

    /** QueryLatencyStats registeredOperationCount. */
    public registeredOperationCount: number;

    /** QueryLatencyStats forbiddenOperationCount. */
    public forbiddenOperationCount: number;

    /**
     * Creates a new QueryLatencyStats instance using the specified properties.
     * @param [properties] Properties to set
     * @returns QueryLatencyStats instance
     */
    public static create(properties?: IQueryLatencyStats): QueryLatencyStats;

    /**
     * Encodes the specified QueryLatencyStats message. Does not implicitly {@link QueryLatencyStats.verify|verify} messages.
     * @param message QueryLatencyStats message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IQueryLatencyStats, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified QueryLatencyStats message, length delimited. Does not implicitly {@link QueryLatencyStats.verify|verify} messages.
     * @param message QueryLatencyStats message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IQueryLatencyStats, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a QueryLatencyStats message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns QueryLatencyStats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): QueryLatencyStats;

    /**
     * Decodes a QueryLatencyStats message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns QueryLatencyStats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): QueryLatencyStats;

    /**
     * Verifies a QueryLatencyStats message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a QueryLatencyStats message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns QueryLatencyStats
     */
    public static fromObject(object: { [k: string]: any }): QueryLatencyStats;

    /**
     * Creates a plain object from a QueryLatencyStats message. Also converts values to other types if specified.
     * @param message QueryLatencyStats
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: QueryLatencyStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this QueryLatencyStats to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a StatsContext. */
export interface IStatsContext {

    /** StatsContext clientReferenceId */
    clientReferenceId?: (string|null);

    /** StatsContext clientName */
    clientName?: (string|null);

    /** StatsContext clientVersion */
    clientVersion?: (string|null);
}

/** Represents a StatsContext. */
export class StatsContext implements IStatsContext {

    /**
     * Constructs a new StatsContext.
     * @param [properties] Properties to set
     */
    constructor(properties?: IStatsContext);

    /** StatsContext clientReferenceId. */
    public clientReferenceId: string;

    /** StatsContext clientName. */
    public clientName: string;

    /** StatsContext clientVersion. */
    public clientVersion: string;

    /**
     * Creates a new StatsContext instance using the specified properties.
     * @param [properties] Properties to set
     * @returns StatsContext instance
     */
    public static create(properties?: IStatsContext): StatsContext;

    /**
     * Encodes the specified StatsContext message. Does not implicitly {@link StatsContext.verify|verify} messages.
     * @param message StatsContext message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IStatsContext, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified StatsContext message, length delimited. Does not implicitly {@link StatsContext.verify|verify} messages.
     * @param message StatsContext message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IStatsContext, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a StatsContext message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns StatsContext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StatsContext;

    /**
     * Decodes a StatsContext message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns StatsContext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StatsContext;

    /**
     * Verifies a StatsContext message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a StatsContext message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns StatsContext
     */
    public static fromObject(object: { [k: string]: any }): StatsContext;

    /**
     * Creates a plain object from a StatsContext message. Also converts values to other types if specified.
     * @param message StatsContext
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: StatsContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this StatsContext to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ContextualizedQueryLatencyStats. */
export interface IContextualizedQueryLatencyStats {

    /** ContextualizedQueryLatencyStats queryLatencyStats */
    queryLatencyStats?: (IQueryLatencyStats|null);

    /** ContextualizedQueryLatencyStats context */
    context?: (IStatsContext|null);
}

/** Represents a ContextualizedQueryLatencyStats. */
export class ContextualizedQueryLatencyStats implements IContextualizedQueryLatencyStats {

    /**
     * Constructs a new ContextualizedQueryLatencyStats.
     * @param [properties] Properties to set
     */
    constructor(properties?: IContextualizedQueryLatencyStats);

    /** ContextualizedQueryLatencyStats queryLatencyStats. */
    public queryLatencyStats?: (IQueryLatencyStats|null);

    /** ContextualizedQueryLatencyStats context. */
    public context?: (IStatsContext|null);

    /**
     * Creates a new ContextualizedQueryLatencyStats instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ContextualizedQueryLatencyStats instance
     */
    public static create(properties?: IContextualizedQueryLatencyStats): ContextualizedQueryLatencyStats;

    /**
     * Encodes the specified ContextualizedQueryLatencyStats message. Does not implicitly {@link ContextualizedQueryLatencyStats.verify|verify} messages.
     * @param message ContextualizedQueryLatencyStats message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IContextualizedQueryLatencyStats, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ContextualizedQueryLatencyStats message, length delimited. Does not implicitly {@link ContextualizedQueryLatencyStats.verify|verify} messages.
     * @param message ContextualizedQueryLatencyStats message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IContextualizedQueryLatencyStats, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ContextualizedQueryLatencyStats message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ContextualizedQueryLatencyStats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ContextualizedQueryLatencyStats;

    /**
     * Decodes a ContextualizedQueryLatencyStats message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ContextualizedQueryLatencyStats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ContextualizedQueryLatencyStats;

    /**
     * Verifies a ContextualizedQueryLatencyStats message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ContextualizedQueryLatencyStats message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ContextualizedQueryLatencyStats
     */
    public static fromObject(object: { [k: string]: any }): ContextualizedQueryLatencyStats;

    /**
     * Creates a plain object from a ContextualizedQueryLatencyStats message. Also converts values to other types if specified.
     * @param message ContextualizedQueryLatencyStats
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ContextualizedQueryLatencyStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ContextualizedQueryLatencyStats to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ContextualizedTypeStats. */
export interface IContextualizedTypeStats {

    /** ContextualizedTypeStats context */
    context?: (IStatsContext|null);

    /** ContextualizedTypeStats perTypeStat */
    perTypeStat?: ({ [k: string]: ITypeStat }|null);
}

/** Represents a ContextualizedTypeStats. */
export class ContextualizedTypeStats implements IContextualizedTypeStats {

    /**
     * Constructs a new ContextualizedTypeStats.
     * @param [properties] Properties to set
     */
    constructor(properties?: IContextualizedTypeStats);

    /** ContextualizedTypeStats context. */
    public context?: (IStatsContext|null);

    /** ContextualizedTypeStats perTypeStat. */
    public perTypeStat: { [k: string]: ITypeStat };

    /**
     * Creates a new ContextualizedTypeStats instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ContextualizedTypeStats instance
     */
    public static create(properties?: IContextualizedTypeStats): ContextualizedTypeStats;

    /**
     * Encodes the specified ContextualizedTypeStats message. Does not implicitly {@link ContextualizedTypeStats.verify|verify} messages.
     * @param message ContextualizedTypeStats message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IContextualizedTypeStats, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ContextualizedTypeStats message, length delimited. Does not implicitly {@link ContextualizedTypeStats.verify|verify} messages.
     * @param message ContextualizedTypeStats message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IContextualizedTypeStats, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ContextualizedTypeStats message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ContextualizedTypeStats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ContextualizedTypeStats;

    /**
     * Decodes a ContextualizedTypeStats message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ContextualizedTypeStats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ContextualizedTypeStats;

    /**
     * Verifies a ContextualizedTypeStats message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ContextualizedTypeStats message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ContextualizedTypeStats
     */
    public static fromObject(object: { [k: string]: any }): ContextualizedTypeStats;

    /**
     * Creates a plain object from a ContextualizedTypeStats message. Also converts values to other types if specified.
     * @param message ContextualizedTypeStats
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ContextualizedTypeStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ContextualizedTypeStats to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a FieldStat. */
export interface IFieldStat {

    /** FieldStat name */
    name?: (string|null);

    /** FieldStat returnType */
    returnType?: (string|null);

    /** FieldStat errorsCount */
    errorsCount?: (number|null);

    /** FieldStat count */
    count?: (number|null);

    /** FieldStat requestsWithErrorsCount */
    requestsWithErrorsCount?: (number|null);

    /** FieldStat latencyCount */
    latencyCount?: (number[]|null);
}

/** Represents a FieldStat. */
export class FieldStat implements IFieldStat {

    /**
     * Constructs a new FieldStat.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFieldStat);

    /** FieldStat name. */
    public name: string;

    /** FieldStat returnType. */
    public returnType: string;

    /** FieldStat errorsCount. */
    public errorsCount: number;

    /** FieldStat count. */
    public count: number;

    /** FieldStat requestsWithErrorsCount. */
    public requestsWithErrorsCount: number;

    /** FieldStat latencyCount. */
    public latencyCount: number[];

    /**
     * Creates a new FieldStat instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FieldStat instance
     */
    public static create(properties?: IFieldStat): FieldStat;

    /**
     * Encodes the specified FieldStat message. Does not implicitly {@link FieldStat.verify|verify} messages.
     * @param message FieldStat message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFieldStat, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FieldStat message, length delimited. Does not implicitly {@link FieldStat.verify|verify} messages.
     * @param message FieldStat message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFieldStat, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FieldStat message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FieldStat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FieldStat;

    /**
     * Decodes a FieldStat message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FieldStat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FieldStat;

    /**
     * Verifies a FieldStat message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a FieldStat message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FieldStat
     */
    public static fromObject(object: { [k: string]: any }): FieldStat;

    /**
     * Creates a plain object from a FieldStat message. Also converts values to other types if specified.
     * @param message FieldStat
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FieldStat, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this FieldStat to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a TypeStat. */
export interface ITypeStat {

    /** TypeStat name */
    name?: (string|null);

    /** TypeStat field */
    field?: (IFieldStat[]|null);

    /** TypeStat perFieldStat */
    perFieldStat?: ({ [k: string]: IFieldStat }|null);
}

/** Represents a TypeStat. */
export class TypeStat implements ITypeStat {

    /**
     * Constructs a new TypeStat.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITypeStat);

    /** TypeStat name. */
    public name: string;

    /** TypeStat field. */
    public field: IFieldStat[];

    /** TypeStat perFieldStat. */
    public perFieldStat: { [k: string]: IFieldStat };

    /**
     * Creates a new TypeStat instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TypeStat instance
     */
    public static create(properties?: ITypeStat): TypeStat;

    /**
     * Encodes the specified TypeStat message. Does not implicitly {@link TypeStat.verify|verify} messages.
     * @param message TypeStat message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITypeStat, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TypeStat message, length delimited. Does not implicitly {@link TypeStat.verify|verify} messages.
     * @param message TypeStat message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITypeStat, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TypeStat message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TypeStat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TypeStat;

    /**
     * Decodes a TypeStat message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TypeStat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TypeStat;

    /**
     * Verifies a TypeStat message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TypeStat message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TypeStat
     */
    public static fromObject(object: { [k: string]: any }): TypeStat;

    /**
     * Creates a plain object from a TypeStat message. Also converts values to other types if specified.
     * @param message TypeStat
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TypeStat, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TypeStat to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a QueryStats. */
export interface IQueryStats {

    /** QueryStats perClientName */
    perClientName?: ({ [k: string]: IClientNameStats }|null);

    /** QueryStats queryStatsWithContext */
    queryStatsWithContext?: (IContextualizedQueryLatencyStats[]|null);

    /** QueryStats perType */
    perType?: (ITypeStat[]|null);

    /** QueryStats perTypeStat */
    perTypeStat?: ({ [k: string]: ITypeStat }|null);

    /** QueryStats typeStatsWithContext */
    typeStatsWithContext?: (IContextualizedTypeStats[]|null);
}

/** Represents a QueryStats. */
export class QueryStats implements IQueryStats {

    /**
     * Constructs a new QueryStats.
     * @param [properties] Properties to set
     */
    constructor(properties?: IQueryStats);

    /** QueryStats perClientName. */
    public perClientName: { [k: string]: IClientNameStats };

    /** QueryStats queryStatsWithContext. */
    public queryStatsWithContext: IContextualizedQueryLatencyStats[];

    /** QueryStats perType. */
    public perType: ITypeStat[];

    /** QueryStats perTypeStat. */
    public perTypeStat: { [k: string]: ITypeStat };

    /** QueryStats typeStatsWithContext. */
    public typeStatsWithContext: IContextualizedTypeStats[];

    /**
     * Creates a new QueryStats instance using the specified properties.
     * @param [properties] Properties to set
     * @returns QueryStats instance
     */
    public static create(properties?: IQueryStats): QueryStats;

    /**
     * Encodes the specified QueryStats message. Does not implicitly {@link QueryStats.verify|verify} messages.
     * @param message QueryStats message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IQueryStats, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified QueryStats message, length delimited. Does not implicitly {@link QueryStats.verify|verify} messages.
     * @param message QueryStats message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IQueryStats, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a QueryStats message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns QueryStats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): QueryStats;

    /**
     * Decodes a QueryStats message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns QueryStats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): QueryStats;

    /**
     * Verifies a QueryStats message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a QueryStats message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns QueryStats
     */
    public static fromObject(object: { [k: string]: any }): QueryStats;

    /**
     * Creates a plain object from a QueryStats message. Also converts values to other types if specified.
     * @param message QueryStats
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: QueryStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this QueryStats to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a TracesReport. */
export interface ITracesReport {

    /** TracesReport header */
    header?: (IReportHeader|null);

    /** TracesReport trace */
    trace?: (ITrace[]|null);
}

/** Represents a TracesReport. */
export class TracesReport implements ITracesReport {

    /**
     * Constructs a new TracesReport.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITracesReport);

    /** TracesReport header. */
    public header?: (IReportHeader|null);

    /** TracesReport trace. */
    public trace: ITrace[];

    /**
     * Creates a new TracesReport instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TracesReport instance
     */
    public static create(properties?: ITracesReport): TracesReport;

    /**
     * Encodes the specified TracesReport message. Does not implicitly {@link TracesReport.verify|verify} messages.
     * @param message TracesReport message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITracesReport, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TracesReport message, length delimited. Does not implicitly {@link TracesReport.verify|verify} messages.
     * @param message TracesReport message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITracesReport, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TracesReport message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TracesReport
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TracesReport;

    /**
     * Decodes a TracesReport message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TracesReport
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TracesReport;

    /**
     * Verifies a TracesReport message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TracesReport message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TracesReport
     */
    public static fromObject(object: { [k: string]: any }): TracesReport;

    /**
     * Creates a plain object from a TracesReport message. Also converts values to other types if specified.
     * @param message TracesReport
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TracesReport, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TracesReport to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Field. */
export interface IField {

    /** Field name */
    name?: (string|null);

    /** Field returnType */
    returnType?: (string|null);
}

/** Represents a Field. */
export class Field implements IField {

    /**
     * Constructs a new Field.
     * @param [properties] Properties to set
     */
    constructor(properties?: IField);

    /** Field name. */
    public name: string;

    /** Field returnType. */
    public returnType: string;

    /**
     * Creates a new Field instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Field instance
     */
    public static create(properties?: IField): Field;

    /**
     * Encodes the specified Field message. Does not implicitly {@link Field.verify|verify} messages.
     * @param message Field message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IField, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Field message, length delimited. Does not implicitly {@link Field.verify|verify} messages.
     * @param message Field message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IField, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Field message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Field
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Field;

    /**
     * Decodes a Field message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Field
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Field;

    /**
     * Verifies a Field message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Field message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Field
     */
    public static fromObject(object: { [k: string]: any }): Field;

    /**
     * Creates a plain object from a Field message. Also converts values to other types if specified.
     * @param message Field
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Field, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Field to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Type. */
export interface IType {

    /** Type name */
    name?: (string|null);

    /** Type field */
    field?: (IField[]|null);
}

/** Represents a Type. */
export class Type implements IType {

    /**
     * Constructs a new Type.
     * @param [properties] Properties to set
     */
    constructor(properties?: IType);

    /** Type name. */
    public name: string;

    /** Type field. */
    public field: IField[];

    /**
     * Creates a new Type instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Type instance
     */
    public static create(properties?: IType): Type;

    /**
     * Encodes the specified Type message. Does not implicitly {@link Type.verify|verify} messages.
     * @param message Type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Type message, length delimited. Does not implicitly {@link Type.verify|verify} messages.
     * @param message Type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Type message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Type;

    /**
     * Decodes a Type message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Type;

    /**
     * Verifies a Type message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Type message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Type
     */
    public static fromObject(object: { [k: string]: any }): Type;

    /**
     * Creates a plain object from a Type message. Also converts values to other types if specified.
     * @param message Type
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Type, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Type to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a MemStats. */
export interface IMemStats {

    /** MemStats totalBytes */
    totalBytes?: (number|null);

    /** MemStats stackBytes */
    stackBytes?: (number|null);

    /** MemStats heapBytes */
    heapBytes?: (number|null);

    /** MemStats heapReleasedBytes */
    heapReleasedBytes?: (number|null);

    /** MemStats gcOverheadBytes */
    gcOverheadBytes?: (number|null);

    /** MemStats stackUsedBytes */
    stackUsedBytes?: (number|null);

    /** MemStats heapAllocatedBytes */
    heapAllocatedBytes?: (number|null);

    /** MemStats heapAllocatedObjects */
    heapAllocatedObjects?: (number|null);

    /** MemStats heapAllocatedBytesDelta */
    heapAllocatedBytesDelta?: (number|null);

    /** MemStats heapAllocatedObjectsDelta */
    heapAllocatedObjectsDelta?: (number|null);

    /** MemStats heapFreedObjectsDelta */
    heapFreedObjectsDelta?: (number|null);

    /** MemStats gcStwNsDelta */
    gcStwNsDelta?: (number|null);

    /** MemStats gcCountDelta */
    gcCountDelta?: (number|null);
}

/** Represents a MemStats. */
export class MemStats implements IMemStats {

    /**
     * Constructs a new MemStats.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMemStats);

    /** MemStats totalBytes. */
    public totalBytes: number;

    /** MemStats stackBytes. */
    public stackBytes: number;

    /** MemStats heapBytes. */
    public heapBytes: number;

    /** MemStats heapReleasedBytes. */
    public heapReleasedBytes: number;

    /** MemStats gcOverheadBytes. */
    public gcOverheadBytes: number;

    /** MemStats stackUsedBytes. */
    public stackUsedBytes: number;

    /** MemStats heapAllocatedBytes. */
    public heapAllocatedBytes: number;

    /** MemStats heapAllocatedObjects. */
    public heapAllocatedObjects: number;

    /** MemStats heapAllocatedBytesDelta. */
    public heapAllocatedBytesDelta: number;

    /** MemStats heapAllocatedObjectsDelta. */
    public heapAllocatedObjectsDelta: number;

    /** MemStats heapFreedObjectsDelta. */
    public heapFreedObjectsDelta: number;

    /** MemStats gcStwNsDelta. */
    public gcStwNsDelta: number;

    /** MemStats gcCountDelta. */
    public gcCountDelta: number;

    /**
     * Creates a new MemStats instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MemStats instance
     */
    public static create(properties?: IMemStats): MemStats;

    /**
     * Encodes the specified MemStats message. Does not implicitly {@link MemStats.verify|verify} messages.
     * @param message MemStats message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMemStats, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MemStats message, length delimited. Does not implicitly {@link MemStats.verify|verify} messages.
     * @param message MemStats message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMemStats, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MemStats message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MemStats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MemStats;

    /**
     * Decodes a MemStats message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MemStats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MemStats;

    /**
     * Verifies a MemStats message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a MemStats message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MemStats
     */
    public static fromObject(object: { [k: string]: any }): MemStats;

    /**
     * Creates a plain object from a MemStats message. Also converts values to other types if specified.
     * @param message MemStats
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: MemStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MemStats to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a TimeStats. */
export interface ITimeStats {

    /** TimeStats uptimeNs */
    uptimeNs?: (number|null);

    /** TimeStats realNsDelta */
    realNsDelta?: (number|null);

    /** TimeStats userNsDelta */
    userNsDelta?: (number|null);

    /** TimeStats sysNsDelta */
    sysNsDelta?: (number|null);
}

/** Represents a TimeStats. */
export class TimeStats implements ITimeStats {

    /**
     * Constructs a new TimeStats.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITimeStats);

    /** TimeStats uptimeNs. */
    public uptimeNs: number;

    /** TimeStats realNsDelta. */
    public realNsDelta: number;

    /** TimeStats userNsDelta. */
    public userNsDelta: number;

    /** TimeStats sysNsDelta. */
    public sysNsDelta: number;

    /**
     * Creates a new TimeStats instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TimeStats instance
     */
    public static create(properties?: ITimeStats): TimeStats;

    /**
     * Encodes the specified TimeStats message. Does not implicitly {@link TimeStats.verify|verify} messages.
     * @param message TimeStats message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITimeStats, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TimeStats message, length delimited. Does not implicitly {@link TimeStats.verify|verify} messages.
     * @param message TimeStats message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITimeStats, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TimeStats message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TimeStats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TimeStats;

    /**
     * Decodes a TimeStats message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TimeStats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TimeStats;

    /**
     * Verifies a TimeStats message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TimeStats message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TimeStats
     */
    public static fromObject(object: { [k: string]: any }): TimeStats;

    /**
     * Creates a plain object from a TimeStats message. Also converts values to other types if specified.
     * @param message TimeStats
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TimeStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TimeStats to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a StatsReport. */
export interface IStatsReport {

    /** StatsReport header */
    header?: (IReportHeader|null);

    /** StatsReport memStats */
    memStats?: (IMemStats|null);

    /** StatsReport timeStats */
    timeStats?: (ITimeStats|null);

    /** StatsReport startTime */
    startTime?: (google.protobuf.ITimestamp|null);

    /** StatsReport endTime */
    endTime?: (google.protobuf.ITimestamp|null);

    /** StatsReport realtimeDuration */
    realtimeDuration?: (number|null);

    /** StatsReport perQuery */
    perQuery?: ({ [k: string]: IQueryStats }|null);

    /** StatsReport legacyPerQueryImplicitOperationName */
    legacyPerQueryImplicitOperationName?: ({ [k: string]: IQueryStats }|null);

    /** StatsReport type */
    type?: (IType[]|null);
}

/** Represents a StatsReport. */
export class StatsReport implements IStatsReport {

    /**
     * Constructs a new StatsReport.
     * @param [properties] Properties to set
     */
    constructor(properties?: IStatsReport);

    /** StatsReport header. */
    public header?: (IReportHeader|null);

    /** StatsReport memStats. */
    public memStats?: (IMemStats|null);

    /** StatsReport timeStats. */
    public timeStats?: (ITimeStats|null);

    /** StatsReport startTime. */
    public startTime?: (google.protobuf.ITimestamp|null);

    /** StatsReport endTime. */
    public endTime?: (google.protobuf.ITimestamp|null);

    /** StatsReport realtimeDuration. */
    public realtimeDuration: number;

    /** StatsReport perQuery. */
    public perQuery: { [k: string]: IQueryStats };

    /** StatsReport legacyPerQueryImplicitOperationName. */
    public legacyPerQueryImplicitOperationName: { [k: string]: IQueryStats };

    /** StatsReport type. */
    public type: IType[];

    /**
     * Creates a new StatsReport instance using the specified properties.
     * @param [properties] Properties to set
     * @returns StatsReport instance
     */
    public static create(properties?: IStatsReport): StatsReport;

    /**
     * Encodes the specified StatsReport message. Does not implicitly {@link StatsReport.verify|verify} messages.
     * @param message StatsReport message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IStatsReport, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified StatsReport message, length delimited. Does not implicitly {@link StatsReport.verify|verify} messages.
     * @param message StatsReport message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IStatsReport, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a StatsReport message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns StatsReport
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StatsReport;

    /**
     * Decodes a StatsReport message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns StatsReport
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StatsReport;

    /**
     * Verifies a StatsReport message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a StatsReport message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns StatsReport
     */
    public static fromObject(object: { [k: string]: any }): StatsReport;

    /**
     * Creates a plain object from a StatsReport message. Also converts values to other types if specified.
     * @param message StatsReport
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: StatsReport, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this StatsReport to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a FullTracesReport. */
export interface IFullTracesReport {

    /** FullTracesReport header */
    header?: (IReportHeader|null);

    /** FullTracesReport tracesPerQuery */
    tracesPerQuery?: ({ [k: string]: ITraces }|null);
}

/** Represents a FullTracesReport. */
export class FullTracesReport implements IFullTracesReport {

    /**
     * Constructs a new FullTracesReport.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFullTracesReport);

    /** FullTracesReport header. */
    public header?: (IReportHeader|null);

    /** FullTracesReport tracesPerQuery. */
    public tracesPerQuery: { [k: string]: ITraces };

    /**
     * Creates a new FullTracesReport instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FullTracesReport instance
     */
    public static create(properties?: IFullTracesReport): FullTracesReport;

    /**
     * Encodes the specified FullTracesReport message. Does not implicitly {@link FullTracesReport.verify|verify} messages.
     * @param message FullTracesReport message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFullTracesReport, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FullTracesReport message, length delimited. Does not implicitly {@link FullTracesReport.verify|verify} messages.
     * @param message FullTracesReport message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFullTracesReport, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FullTracesReport message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FullTracesReport
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FullTracesReport;

    /**
     * Decodes a FullTracesReport message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FullTracesReport
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FullTracesReport;

    /**
     * Verifies a FullTracesReport message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a FullTracesReport message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FullTracesReport
     */
    public static fromObject(object: { [k: string]: any }): FullTracesReport;

    /**
     * Creates a plain object from a FullTracesReport message. Also converts values to other types if specified.
     * @param message FullTracesReport
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FullTracesReport, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this FullTracesReport to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Traces. */
export interface ITraces {

    /** Traces trace */
    trace?: (ITrace[]|null);
}

/** Represents a Traces. */
export class Traces implements ITraces {

    /**
     * Constructs a new Traces.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITraces);

    /** Traces trace. */
    public trace: ITrace[];

    /**
     * Creates a new Traces instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Traces instance
     */
    public static create(properties?: ITraces): Traces;

    /**
     * Encodes the specified Traces message. Does not implicitly {@link Traces.verify|verify} messages.
     * @param message Traces message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITraces, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Traces message, length delimited. Does not implicitly {@link Traces.verify|verify} messages.
     * @param message Traces message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITraces, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Traces message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Traces
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Traces;

    /**
     * Decodes a Traces message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Traces
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Traces;

    /**
     * Verifies a Traces message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Traces message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Traces
     */
    public static fromObject(object: { [k: string]: any }): Traces;

    /**
     * Creates a plain object from a Traces message. Also converts values to other types if specified.
     * @param message Traces
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Traces, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Traces to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a TraceV1. */
export interface ITraceV1 {

    /** TraceV1 header */
    header?: (IReportHeader|null);

    /** TraceV1 trace */
    trace?: (ITrace|null);
}

/** Represents a TraceV1. */
export class TraceV1 implements ITraceV1 {

    /**
     * Constructs a new TraceV1.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITraceV1);

    /** TraceV1 header. */
    public header?: (IReportHeader|null);

    /** TraceV1 trace. */
    public trace?: (ITrace|null);

    /**
     * Creates a new TraceV1 instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TraceV1 instance
     */
    public static create(properties?: ITraceV1): TraceV1;

    /**
     * Encodes the specified TraceV1 message. Does not implicitly {@link TraceV1.verify|verify} messages.
     * @param message TraceV1 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITraceV1, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TraceV1 message, length delimited. Does not implicitly {@link TraceV1.verify|verify} messages.
     * @param message TraceV1 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITraceV1, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TraceV1 message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TraceV1
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TraceV1;

    /**
     * Decodes a TraceV1 message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TraceV1
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TraceV1;

    /**
     * Verifies a TraceV1 message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TraceV1 message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TraceV1
     */
    public static fromObject(object: { [k: string]: any }): TraceV1;

    /**
     * Creates a plain object from a TraceV1 message. Also converts values to other types if specified.
     * @param message TraceV1
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TraceV1, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TraceV1 to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: number;

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
