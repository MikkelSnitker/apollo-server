/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("@apollo/protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Trace = (function() {

    /**
     * Properties of a Trace.
     * @exports ITrace
     * @interface ITrace
     * @property {google.protobuf.ITimestamp|null} [startTime] Trace startTime
     * @property {google.protobuf.ITimestamp|null} [endTime] Trace endTime
     * @property {number|null} [durationNs] Trace durationNs
     * @property {Trace.INode|null} [root] Trace root
     * @property {string|null} [signature] Trace signature
     * @property {Trace.IDetails|null} [details] Trace details
     * @property {string|null} [clientName] Trace clientName
     * @property {string|null} [clientVersion] Trace clientVersion
     * @property {string|null} [clientAddress] Trace clientAddress
     * @property {string|null} [clientReferenceId] Trace clientReferenceId
     * @property {Trace.IHTTP|null} [http] Trace http
     * @property {Trace.ICachePolicy|null} [cachePolicy] Trace cachePolicy
     * @property {Trace.IQueryPlanNode|null} [queryPlan] Trace queryPlan
     * @property {boolean|null} [fullQueryCacheHit] Trace fullQueryCacheHit
     * @property {boolean|null} [persistedQueryHit] Trace persistedQueryHit
     * @property {boolean|null} [persistedQueryRegister] Trace persistedQueryRegister
     * @property {boolean|null} [registeredOperation] Trace registeredOperation
     * @property {boolean|null} [forbiddenOperation] Trace forbiddenOperation
     * @property {google.protobuf.ITimestamp|null} [originReportedStartTime] Trace originReportedStartTime
     * @property {google.protobuf.ITimestamp|null} [originReportedEndTime] Trace originReportedEndTime
     * @property {number|null} [originReportedDurationNs] Trace originReportedDurationNs
     * @property {string|null} [legacySignatureNeedsResigning] Trace legacySignatureNeedsResigning
     */

    /**
     * Constructs a new Trace.
     * @exports Trace
     * @classdesc Represents a Trace.
     * @implements ITrace
     * @constructor
     * @param {ITrace=} [properties] Properties to set
     */
    function Trace(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Trace startTime.
     * @member {google.protobuf.ITimestamp|null|undefined} startTime
     * @memberof Trace
     * @instance
     */
    Trace.prototype.startTime = null;

    /**
     * Trace endTime.
     * @member {google.protobuf.ITimestamp|null|undefined} endTime
     * @memberof Trace
     * @instance
     */
    Trace.prototype.endTime = null;

    /**
     * Trace durationNs.
     * @member {number} durationNs
     * @memberof Trace
     * @instance
     */
    Trace.prototype.durationNs = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Trace root.
     * @member {Trace.INode|null|undefined} root
     * @memberof Trace
     * @instance
     */
    Trace.prototype.root = null;

    /**
     * Trace signature.
     * @member {string} signature
     * @memberof Trace
     * @instance
     */
    Trace.prototype.signature = "";

    /**
     * Trace details.
     * @member {Trace.IDetails|null|undefined} details
     * @memberof Trace
     * @instance
     */
    Trace.prototype.details = null;

    /**
     * Trace clientName.
     * @member {string} clientName
     * @memberof Trace
     * @instance
     */
    Trace.prototype.clientName = "";

    /**
     * Trace clientVersion.
     * @member {string} clientVersion
     * @memberof Trace
     * @instance
     */
    Trace.prototype.clientVersion = "";

    /**
     * Trace clientAddress.
     * @member {string} clientAddress
     * @memberof Trace
     * @instance
     */
    Trace.prototype.clientAddress = "";

    /**
     * Trace clientReferenceId.
     * @member {string} clientReferenceId
     * @memberof Trace
     * @instance
     */
    Trace.prototype.clientReferenceId = "";

    /**
     * Trace http.
     * @member {Trace.IHTTP|null|undefined} http
     * @memberof Trace
     * @instance
     */
    Trace.prototype.http = null;

    /**
     * Trace cachePolicy.
     * @member {Trace.ICachePolicy|null|undefined} cachePolicy
     * @memberof Trace
     * @instance
     */
    Trace.prototype.cachePolicy = null;

    /**
     * Trace queryPlan.
     * @member {Trace.IQueryPlanNode|null|undefined} queryPlan
     * @memberof Trace
     * @instance
     */
    Trace.prototype.queryPlan = null;

    /**
     * Trace fullQueryCacheHit.
     * @member {boolean} fullQueryCacheHit
     * @memberof Trace
     * @instance
     */
    Trace.prototype.fullQueryCacheHit = false;

    /**
     * Trace persistedQueryHit.
     * @member {boolean} persistedQueryHit
     * @memberof Trace
     * @instance
     */
    Trace.prototype.persistedQueryHit = false;

    /**
     * Trace persistedQueryRegister.
     * @member {boolean} persistedQueryRegister
     * @memberof Trace
     * @instance
     */
    Trace.prototype.persistedQueryRegister = false;

    /**
     * Trace registeredOperation.
     * @member {boolean} registeredOperation
     * @memberof Trace
     * @instance
     */
    Trace.prototype.registeredOperation = false;

    /**
     * Trace forbiddenOperation.
     * @member {boolean} forbiddenOperation
     * @memberof Trace
     * @instance
     */
    Trace.prototype.forbiddenOperation = false;

    /**
     * Trace originReportedStartTime.
     * @member {google.protobuf.ITimestamp|null|undefined} originReportedStartTime
     * @memberof Trace
     * @instance
     */
    Trace.prototype.originReportedStartTime = null;

    /**
     * Trace originReportedEndTime.
     * @member {google.protobuf.ITimestamp|null|undefined} originReportedEndTime
     * @memberof Trace
     * @instance
     */
    Trace.prototype.originReportedEndTime = null;

    /**
     * Trace originReportedDurationNs.
     * @member {number} originReportedDurationNs
     * @memberof Trace
     * @instance
     */
    Trace.prototype.originReportedDurationNs = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Trace legacySignatureNeedsResigning.
     * @member {string} legacySignatureNeedsResigning
     * @memberof Trace
     * @instance
     */
    Trace.prototype.legacySignatureNeedsResigning = "";

    /**
     * Creates a new Trace instance using the specified properties.
     * @function create
     * @memberof Trace
     * @static
     * @param {ITrace=} [properties] Properties to set
     * @returns {Trace} Trace instance
     */
    Trace.create = function create(properties) {
        return new Trace(properties);
    };

    /**
     * Encodes the specified Trace message. Does not implicitly {@link Trace.verify|verify} messages.
     * @function encode
     * @memberof Trace
     * @static
     * @param {ITrace} message Trace message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Trace.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.endTime != null && Object.hasOwnProperty.call(message, "endTime"))
            $root.google.protobuf.Timestamp.encode(message.endTime, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.startTime != null && Object.hasOwnProperty.call(message, "startTime"))
            $root.google.protobuf.Timestamp.encode(message.startTime, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.legacySignatureNeedsResigning != null && Object.hasOwnProperty.call(message, "legacySignatureNeedsResigning"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.legacySignatureNeedsResigning);
        if (message.details != null && Object.hasOwnProperty.call(message, "details"))
            $root.Trace.Details.encode(message.details, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.clientName != null && Object.hasOwnProperty.call(message, "clientName"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.clientName);
        if (message.clientVersion != null && Object.hasOwnProperty.call(message, "clientVersion"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.clientVersion);
        if (message.clientAddress != null && Object.hasOwnProperty.call(message, "clientAddress"))
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.clientAddress);
        if (message.http != null && Object.hasOwnProperty.call(message, "http"))
            $root.Trace.HTTP.encode(message.http, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        if (message.durationNs != null && Object.hasOwnProperty.call(message, "durationNs"))
            writer.uint32(/* id 11, wireType 0 =*/88).uint64(message.durationNs);
        if (message.root != null && Object.hasOwnProperty.call(message, "root"))
            $root.Trace.Node.encode(message.root, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
        if (message.originReportedStartTime != null && Object.hasOwnProperty.call(message, "originReportedStartTime"))
            $root.google.protobuf.Timestamp.encode(message.originReportedStartTime, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
        if (message.originReportedEndTime != null && Object.hasOwnProperty.call(message, "originReportedEndTime"))
            $root.google.protobuf.Timestamp.encode(message.originReportedEndTime, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
        if (message.originReportedDurationNs != null && Object.hasOwnProperty.call(message, "originReportedDurationNs"))
            writer.uint32(/* id 17, wireType 0 =*/136).uint64(message.originReportedDurationNs);
        if (message.cachePolicy != null && Object.hasOwnProperty.call(message, "cachePolicy"))
            $root.Trace.CachePolicy.encode(message.cachePolicy, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
        if (message.signature != null && Object.hasOwnProperty.call(message, "signature"))
            writer.uint32(/* id 19, wireType 2 =*/154).string(message.signature);
        if (message.fullQueryCacheHit != null && Object.hasOwnProperty.call(message, "fullQueryCacheHit"))
            writer.uint32(/* id 20, wireType 0 =*/160).bool(message.fullQueryCacheHit);
        if (message.persistedQueryHit != null && Object.hasOwnProperty.call(message, "persistedQueryHit"))
            writer.uint32(/* id 21, wireType 0 =*/168).bool(message.persistedQueryHit);
        if (message.persistedQueryRegister != null && Object.hasOwnProperty.call(message, "persistedQueryRegister"))
            writer.uint32(/* id 22, wireType 0 =*/176).bool(message.persistedQueryRegister);
        if (message.clientReferenceId != null && Object.hasOwnProperty.call(message, "clientReferenceId"))
            writer.uint32(/* id 23, wireType 2 =*/186).string(message.clientReferenceId);
        if (message.registeredOperation != null && Object.hasOwnProperty.call(message, "registeredOperation"))
            writer.uint32(/* id 24, wireType 0 =*/192).bool(message.registeredOperation);
        if (message.forbiddenOperation != null && Object.hasOwnProperty.call(message, "forbiddenOperation"))
            writer.uint32(/* id 25, wireType 0 =*/200).bool(message.forbiddenOperation);
        if (message.queryPlan != null && Object.hasOwnProperty.call(message, "queryPlan"))
            $root.Trace.QueryPlanNode.encode(message.queryPlan, writer.uint32(/* id 26, wireType 2 =*/210).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Trace message, length delimited. Does not implicitly {@link Trace.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Trace
     * @static
     * @param {ITrace} message Trace message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Trace.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Trace message from the specified reader or buffer.
     * @function decode
     * @memberof Trace
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Trace} Trace
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Trace.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Trace();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 4:
                message.startTime = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                break;
            case 3:
                message.endTime = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                break;
            case 11:
                message.durationNs = reader.uint64();
                break;
            case 14:
                message.root = $root.Trace.Node.decode(reader, reader.uint32());
                break;
            case 19:
                message.signature = reader.string();
                break;
            case 6:
                message.details = $root.Trace.Details.decode(reader, reader.uint32());
                break;
            case 7:
                message.clientName = reader.string();
                break;
            case 8:
                message.clientVersion = reader.string();
                break;
            case 9:
                message.clientAddress = reader.string();
                break;
            case 23:
                message.clientReferenceId = reader.string();
                break;
            case 10:
                message.http = $root.Trace.HTTP.decode(reader, reader.uint32());
                break;
            case 18:
                message.cachePolicy = $root.Trace.CachePolicy.decode(reader, reader.uint32());
                break;
            case 26:
                message.queryPlan = $root.Trace.QueryPlanNode.decode(reader, reader.uint32());
                break;
            case 20:
                message.fullQueryCacheHit = reader.bool();
                break;
            case 21:
                message.persistedQueryHit = reader.bool();
                break;
            case 22:
                message.persistedQueryRegister = reader.bool();
                break;
            case 24:
                message.registeredOperation = reader.bool();
                break;
            case 25:
                message.forbiddenOperation = reader.bool();
                break;
            case 15:
                message.originReportedStartTime = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                break;
            case 16:
                message.originReportedEndTime = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                break;
            case 17:
                message.originReportedDurationNs = reader.uint64();
                break;
            case 5:
                message.legacySignatureNeedsResigning = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Trace message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Trace
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Trace} Trace
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Trace.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Trace message.
     * @function verify
     * @memberof Trace
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Trace.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.startTime != null && message.hasOwnProperty("startTime")) {
            var error = $root.google.protobuf.Timestamp.verify(message.startTime);
            if (error)
                return "startTime." + error;
        }
        if (message.endTime != null && message.hasOwnProperty("endTime")) {
            var error = $root.google.protobuf.Timestamp.verify(message.endTime);
            if (error)
                return "endTime." + error;
        }
        if (message.durationNs != null && message.hasOwnProperty("durationNs"))
            if (!$util.isInteger(message.durationNs) && !(message.durationNs && $util.isInteger(message.durationNs.low) && $util.isInteger(message.durationNs.high)))
                return "durationNs: integer|Long expected";
        if (message.root != null && message.hasOwnProperty("root")) {
            var error = $root.Trace.Node.verify(message.root);
            if (error)
                return "root." + error;
        }
        if (message.signature != null && message.hasOwnProperty("signature"))
            if (!$util.isString(message.signature))
                return "signature: string expected";
        if (message.details != null && message.hasOwnProperty("details")) {
            var error = $root.Trace.Details.verify(message.details);
            if (error)
                return "details." + error;
        }
        if (message.clientName != null && message.hasOwnProperty("clientName"))
            if (!$util.isString(message.clientName))
                return "clientName: string expected";
        if (message.clientVersion != null && message.hasOwnProperty("clientVersion"))
            if (!$util.isString(message.clientVersion))
                return "clientVersion: string expected";
        if (message.clientAddress != null && message.hasOwnProperty("clientAddress"))
            if (!$util.isString(message.clientAddress))
                return "clientAddress: string expected";
        if (message.clientReferenceId != null && message.hasOwnProperty("clientReferenceId"))
            if (!$util.isString(message.clientReferenceId))
                return "clientReferenceId: string expected";
        if (message.http != null && message.hasOwnProperty("http")) {
            var error = $root.Trace.HTTP.verify(message.http);
            if (error)
                return "http." + error;
        }
        if (message.cachePolicy != null && message.hasOwnProperty("cachePolicy")) {
            var error = $root.Trace.CachePolicy.verify(message.cachePolicy);
            if (error)
                return "cachePolicy." + error;
        }
        if (message.queryPlan != null && message.hasOwnProperty("queryPlan")) {
            var error = $root.Trace.QueryPlanNode.verify(message.queryPlan);
            if (error)
                return "queryPlan." + error;
        }
        if (message.fullQueryCacheHit != null && message.hasOwnProperty("fullQueryCacheHit"))
            if (typeof message.fullQueryCacheHit !== "boolean")
                return "fullQueryCacheHit: boolean expected";
        if (message.persistedQueryHit != null && message.hasOwnProperty("persistedQueryHit"))
            if (typeof message.persistedQueryHit !== "boolean")
                return "persistedQueryHit: boolean expected";
        if (message.persistedQueryRegister != null && message.hasOwnProperty("persistedQueryRegister"))
            if (typeof message.persistedQueryRegister !== "boolean")
                return "persistedQueryRegister: boolean expected";
        if (message.registeredOperation != null && message.hasOwnProperty("registeredOperation"))
            if (typeof message.registeredOperation !== "boolean")
                return "registeredOperation: boolean expected";
        if (message.forbiddenOperation != null && message.hasOwnProperty("forbiddenOperation"))
            if (typeof message.forbiddenOperation !== "boolean")
                return "forbiddenOperation: boolean expected";
        if (message.originReportedStartTime != null && message.hasOwnProperty("originReportedStartTime")) {
            var error = $root.google.protobuf.Timestamp.verify(message.originReportedStartTime);
            if (error)
                return "originReportedStartTime." + error;
        }
        if (message.originReportedEndTime != null && message.hasOwnProperty("originReportedEndTime")) {
            var error = $root.google.protobuf.Timestamp.verify(message.originReportedEndTime);
            if (error)
                return "originReportedEndTime." + error;
        }
        if (message.originReportedDurationNs != null && message.hasOwnProperty("originReportedDurationNs"))
            if (!$util.isInteger(message.originReportedDurationNs) && !(message.originReportedDurationNs && $util.isInteger(message.originReportedDurationNs.low) && $util.isInteger(message.originReportedDurationNs.high)))
                return "originReportedDurationNs: integer|Long expected";
        if (message.legacySignatureNeedsResigning != null && message.hasOwnProperty("legacySignatureNeedsResigning"))
            if (!$util.isString(message.legacySignatureNeedsResigning))
                return "legacySignatureNeedsResigning: string expected";
        return null;
    };

    /**
     * Creates a Trace message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Trace
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Trace} Trace
     */
    Trace.fromObject = function fromObject(object) {
        if (object instanceof $root.Trace)
            return object;
        var message = new $root.Trace();
        if (object.startTime != null) {
            if (typeof object.startTime !== "object")
                throw TypeError(".Trace.startTime: object expected");
            message.startTime = $root.google.protobuf.Timestamp.fromObject(object.startTime);
        }
        if (object.endTime != null) {
            if (typeof object.endTime !== "object")
                throw TypeError(".Trace.endTime: object expected");
            message.endTime = $root.google.protobuf.Timestamp.fromObject(object.endTime);
        }
        if (object.durationNs != null)
            if ($util.Long)
                (message.durationNs = $util.Long.fromValue(object.durationNs)).unsigned = true;
            else if (typeof object.durationNs === "string")
                message.durationNs = parseInt(object.durationNs, 10);
            else if (typeof object.durationNs === "number")
                message.durationNs = object.durationNs;
            else if (typeof object.durationNs === "object")
                message.durationNs = new $util.LongBits(object.durationNs.low >>> 0, object.durationNs.high >>> 0).toNumber(true);
        if (object.root != null) {
            if (typeof object.root !== "object")
                throw TypeError(".Trace.root: object expected");
            message.root = $root.Trace.Node.fromObject(object.root);
        }
        if (object.signature != null)
            message.signature = String(object.signature);
        if (object.details != null) {
            if (typeof object.details !== "object")
                throw TypeError(".Trace.details: object expected");
            message.details = $root.Trace.Details.fromObject(object.details);
        }
        if (object.clientName != null)
            message.clientName = String(object.clientName);
        if (object.clientVersion != null)
            message.clientVersion = String(object.clientVersion);
        if (object.clientAddress != null)
            message.clientAddress = String(object.clientAddress);
        if (object.clientReferenceId != null)
            message.clientReferenceId = String(object.clientReferenceId);
        if (object.http != null) {
            if (typeof object.http !== "object")
                throw TypeError(".Trace.http: object expected");
            message.http = $root.Trace.HTTP.fromObject(object.http);
        }
        if (object.cachePolicy != null) {
            if (typeof object.cachePolicy !== "object")
                throw TypeError(".Trace.cachePolicy: object expected");
            message.cachePolicy = $root.Trace.CachePolicy.fromObject(object.cachePolicy);
        }
        if (object.queryPlan != null) {
            if (typeof object.queryPlan !== "object")
                throw TypeError(".Trace.queryPlan: object expected");
            message.queryPlan = $root.Trace.QueryPlanNode.fromObject(object.queryPlan);
        }
        if (object.fullQueryCacheHit != null)
            message.fullQueryCacheHit = Boolean(object.fullQueryCacheHit);
        if (object.persistedQueryHit != null)
            message.persistedQueryHit = Boolean(object.persistedQueryHit);
        if (object.persistedQueryRegister != null)
            message.persistedQueryRegister = Boolean(object.persistedQueryRegister);
        if (object.registeredOperation != null)
            message.registeredOperation = Boolean(object.registeredOperation);
        if (object.forbiddenOperation != null)
            message.forbiddenOperation = Boolean(object.forbiddenOperation);
        if (object.originReportedStartTime != null) {
            if (typeof object.originReportedStartTime !== "object")
                throw TypeError(".Trace.originReportedStartTime: object expected");
            message.originReportedStartTime = $root.google.protobuf.Timestamp.fromObject(object.originReportedStartTime);
        }
        if (object.originReportedEndTime != null) {
            if (typeof object.originReportedEndTime !== "object")
                throw TypeError(".Trace.originReportedEndTime: object expected");
            message.originReportedEndTime = $root.google.protobuf.Timestamp.fromObject(object.originReportedEndTime);
        }
        if (object.originReportedDurationNs != null)
            if ($util.Long)
                (message.originReportedDurationNs = $util.Long.fromValue(object.originReportedDurationNs)).unsigned = true;
            else if (typeof object.originReportedDurationNs === "string")
                message.originReportedDurationNs = parseInt(object.originReportedDurationNs, 10);
            else if (typeof object.originReportedDurationNs === "number")
                message.originReportedDurationNs = object.originReportedDurationNs;
            else if (typeof object.originReportedDurationNs === "object")
                message.originReportedDurationNs = new $util.LongBits(object.originReportedDurationNs.low >>> 0, object.originReportedDurationNs.high >>> 0).toNumber(true);
        if (object.legacySignatureNeedsResigning != null)
            message.legacySignatureNeedsResigning = String(object.legacySignatureNeedsResigning);
        return message;
    };

    /**
     * Creates a plain object from a Trace message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Trace
     * @static
     * @param {Trace} message Trace
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Trace.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.endTime = null;
            object.startTime = null;
            object.legacySignatureNeedsResigning = "";
            object.details = null;
            object.clientName = "";
            object.clientVersion = "";
            object.clientAddress = "";
            object.http = null;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.durationNs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.durationNs = options.longs === String ? "0" : 0;
            object.root = null;
            object.originReportedStartTime = null;
            object.originReportedEndTime = null;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.originReportedDurationNs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.originReportedDurationNs = options.longs === String ? "0" : 0;
            object.cachePolicy = null;
            object.signature = "";
            object.fullQueryCacheHit = false;
            object.persistedQueryHit = false;
            object.persistedQueryRegister = false;
            object.clientReferenceId = "";
            object.registeredOperation = false;
            object.forbiddenOperation = false;
            object.queryPlan = null;
        }
        if (message.endTime != null && message.hasOwnProperty("endTime"))
            object.endTime = $root.google.protobuf.Timestamp.toObject(message.endTime, options);
        if (message.startTime != null && message.hasOwnProperty("startTime"))
            object.startTime = $root.google.protobuf.Timestamp.toObject(message.startTime, options);
        if (message.legacySignatureNeedsResigning != null && message.hasOwnProperty("legacySignatureNeedsResigning"))
            object.legacySignatureNeedsResigning = message.legacySignatureNeedsResigning;
        if (message.details != null && message.hasOwnProperty("details"))
            object.details = $root.Trace.Details.toObject(message.details, options);
        if (message.clientName != null && message.hasOwnProperty("clientName"))
            object.clientName = message.clientName;
        if (message.clientVersion != null && message.hasOwnProperty("clientVersion"))
            object.clientVersion = message.clientVersion;
        if (message.clientAddress != null && message.hasOwnProperty("clientAddress"))
            object.clientAddress = message.clientAddress;
        if (message.http != null && message.hasOwnProperty("http"))
            object.http = $root.Trace.HTTP.toObject(message.http, options);
        if (message.durationNs != null && message.hasOwnProperty("durationNs"))
            if (typeof message.durationNs === "number")
                object.durationNs = options.longs === String ? String(message.durationNs) : message.durationNs;
            else
                object.durationNs = options.longs === String ? $util.Long.prototype.toString.call(message.durationNs) : options.longs === Number ? new $util.LongBits(message.durationNs.low >>> 0, message.durationNs.high >>> 0).toNumber(true) : message.durationNs;
        if (message.root != null && message.hasOwnProperty("root"))
            object.root = $root.Trace.Node.toObject(message.root, options);
        if (message.originReportedStartTime != null && message.hasOwnProperty("originReportedStartTime"))
            object.originReportedStartTime = $root.google.protobuf.Timestamp.toObject(message.originReportedStartTime, options);
        if (message.originReportedEndTime != null && message.hasOwnProperty("originReportedEndTime"))
            object.originReportedEndTime = $root.google.protobuf.Timestamp.toObject(message.originReportedEndTime, options);
        if (message.originReportedDurationNs != null && message.hasOwnProperty("originReportedDurationNs"))
            if (typeof message.originReportedDurationNs === "number")
                object.originReportedDurationNs = options.longs === String ? String(message.originReportedDurationNs) : message.originReportedDurationNs;
            else
                object.originReportedDurationNs = options.longs === String ? $util.Long.prototype.toString.call(message.originReportedDurationNs) : options.longs === Number ? new $util.LongBits(message.originReportedDurationNs.low >>> 0, message.originReportedDurationNs.high >>> 0).toNumber(true) : message.originReportedDurationNs;
        if (message.cachePolicy != null && message.hasOwnProperty("cachePolicy"))
            object.cachePolicy = $root.Trace.CachePolicy.toObject(message.cachePolicy, options);
        if (message.signature != null && message.hasOwnProperty("signature"))
            object.signature = message.signature;
        if (message.fullQueryCacheHit != null && message.hasOwnProperty("fullQueryCacheHit"))
            object.fullQueryCacheHit = message.fullQueryCacheHit;
        if (message.persistedQueryHit != null && message.hasOwnProperty("persistedQueryHit"))
            object.persistedQueryHit = message.persistedQueryHit;
        if (message.persistedQueryRegister != null && message.hasOwnProperty("persistedQueryRegister"))
            object.persistedQueryRegister = message.persistedQueryRegister;
        if (message.clientReferenceId != null && message.hasOwnProperty("clientReferenceId"))
            object.clientReferenceId = message.clientReferenceId;
        if (message.registeredOperation != null && message.hasOwnProperty("registeredOperation"))
            object.registeredOperation = message.registeredOperation;
        if (message.forbiddenOperation != null && message.hasOwnProperty("forbiddenOperation"))
            object.forbiddenOperation = message.forbiddenOperation;
        if (message.queryPlan != null && message.hasOwnProperty("queryPlan"))
            object.queryPlan = $root.Trace.QueryPlanNode.toObject(message.queryPlan, options);
        return object;
    };

    /**
     * Converts this Trace to JSON.
     * @function toJSON
     * @memberof Trace
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Trace.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    Trace.CachePolicy = (function() {

        /**
         * Properties of a CachePolicy.
         * @memberof Trace
         * @interface ICachePolicy
         * @property {Trace.CachePolicy.Scope|null} [scope] CachePolicy scope
         * @property {number|null} [maxAgeNs] CachePolicy maxAgeNs
         */

        /**
         * Constructs a new CachePolicy.
         * @memberof Trace
         * @classdesc Represents a CachePolicy.
         * @implements ICachePolicy
         * @constructor
         * @param {Trace.ICachePolicy=} [properties] Properties to set
         */
        function CachePolicy(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CachePolicy scope.
         * @member {Trace.CachePolicy.Scope} scope
         * @memberof Trace.CachePolicy
         * @instance
         */
        CachePolicy.prototype.scope = 0;

        /**
         * CachePolicy maxAgeNs.
         * @member {number} maxAgeNs
         * @memberof Trace.CachePolicy
         * @instance
         */
        CachePolicy.prototype.maxAgeNs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new CachePolicy instance using the specified properties.
         * @function create
         * @memberof Trace.CachePolicy
         * @static
         * @param {Trace.ICachePolicy=} [properties] Properties to set
         * @returns {Trace.CachePolicy} CachePolicy instance
         */
        CachePolicy.create = function create(properties) {
            return new CachePolicy(properties);
        };

        /**
         * Encodes the specified CachePolicy message. Does not implicitly {@link Trace.CachePolicy.verify|verify} messages.
         * @function encode
         * @memberof Trace.CachePolicy
         * @static
         * @param {Trace.ICachePolicy} message CachePolicy message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CachePolicy.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.scope != null && Object.hasOwnProperty.call(message, "scope"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.scope);
            if (message.maxAgeNs != null && Object.hasOwnProperty.call(message, "maxAgeNs"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.maxAgeNs);
            return writer;
        };

        /**
         * Encodes the specified CachePolicy message, length delimited. Does not implicitly {@link Trace.CachePolicy.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Trace.CachePolicy
         * @static
         * @param {Trace.ICachePolicy} message CachePolicy message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CachePolicy.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CachePolicy message from the specified reader or buffer.
         * @function decode
         * @memberof Trace.CachePolicy
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Trace.CachePolicy} CachePolicy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CachePolicy.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Trace.CachePolicy();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.scope = reader.int32();
                    break;
                case 2:
                    message.maxAgeNs = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CachePolicy message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Trace.CachePolicy
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Trace.CachePolicy} CachePolicy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CachePolicy.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CachePolicy message.
         * @function verify
         * @memberof Trace.CachePolicy
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CachePolicy.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.scope != null && message.hasOwnProperty("scope"))
                switch (message.scope) {
                default:
                    return "scope: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.maxAgeNs != null && message.hasOwnProperty("maxAgeNs"))
                if (!$util.isInteger(message.maxAgeNs) && !(message.maxAgeNs && $util.isInteger(message.maxAgeNs.low) && $util.isInteger(message.maxAgeNs.high)))
                    return "maxAgeNs: integer|Long expected";
            return null;
        };

        /**
         * Creates a CachePolicy message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Trace.CachePolicy
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Trace.CachePolicy} CachePolicy
         */
        CachePolicy.fromObject = function fromObject(object) {
            if (object instanceof $root.Trace.CachePolicy)
                return object;
            var message = new $root.Trace.CachePolicy();
            switch (object.scope) {
            case "UNKNOWN":
            case 0:
                message.scope = 0;
                break;
            case "PUBLIC":
            case 1:
                message.scope = 1;
                break;
            case "PRIVATE":
            case 2:
                message.scope = 2;
                break;
            }
            if (object.maxAgeNs != null)
                if ($util.Long)
                    (message.maxAgeNs = $util.Long.fromValue(object.maxAgeNs)).unsigned = false;
                else if (typeof object.maxAgeNs === "string")
                    message.maxAgeNs = parseInt(object.maxAgeNs, 10);
                else if (typeof object.maxAgeNs === "number")
                    message.maxAgeNs = object.maxAgeNs;
                else if (typeof object.maxAgeNs === "object")
                    message.maxAgeNs = new $util.LongBits(object.maxAgeNs.low >>> 0, object.maxAgeNs.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a CachePolicy message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Trace.CachePolicy
         * @static
         * @param {Trace.CachePolicy} message CachePolicy
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CachePolicy.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.scope = options.enums === String ? "UNKNOWN" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.maxAgeNs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.maxAgeNs = options.longs === String ? "0" : 0;
            }
            if (message.scope != null && message.hasOwnProperty("scope"))
                object.scope = options.enums === String ? $root.Trace.CachePolicy.Scope[message.scope] : message.scope;
            if (message.maxAgeNs != null && message.hasOwnProperty("maxAgeNs"))
                if (typeof message.maxAgeNs === "number")
                    object.maxAgeNs = options.longs === String ? String(message.maxAgeNs) : message.maxAgeNs;
                else
                    object.maxAgeNs = options.longs === String ? $util.Long.prototype.toString.call(message.maxAgeNs) : options.longs === Number ? new $util.LongBits(message.maxAgeNs.low >>> 0, message.maxAgeNs.high >>> 0).toNumber() : message.maxAgeNs;
            return object;
        };

        /**
         * Converts this CachePolicy to JSON.
         * @function toJSON
         * @memberof Trace.CachePolicy
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CachePolicy.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Scope enum.
         * @name Trace.CachePolicy.Scope
         * @enum {string}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} PUBLIC=1 PUBLIC value
         * @property {number} PRIVATE=2 PRIVATE value
         */
        CachePolicy.Scope = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "PUBLIC"] = 1;
            values[valuesById[2] = "PRIVATE"] = 2;
            return values;
        })();

        return CachePolicy;
    })();

    Trace.Details = (function() {

        /**
         * Properties of a Details.
         * @memberof Trace
         * @interface IDetails
         * @property {Object.<string,string>|null} [variablesJson] Details variablesJson
         * @property {Object.<string,Uint8Array>|null} [variables] Details variables
         * @property {string|null} [rawQuery] Details rawQuery
         * @property {string|null} [operationName] Details operationName
         */

        /**
         * Constructs a new Details.
         * @memberof Trace
         * @classdesc Represents a Details.
         * @implements IDetails
         * @constructor
         * @param {Trace.IDetails=} [properties] Properties to set
         */
        function Details(properties) {
            this.variablesJson = {};
            this.variables = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Details variablesJson.
         * @member {Object.<string,string>} variablesJson
         * @memberof Trace.Details
         * @instance
         */
        Details.prototype.variablesJson = $util.emptyObject;

        /**
         * Details variables.
         * @member {Object.<string,Uint8Array>} variables
         * @memberof Trace.Details
         * @instance
         */
        Details.prototype.variables = $util.emptyObject;

        /**
         * Details rawQuery.
         * @member {string} rawQuery
         * @memberof Trace.Details
         * @instance
         */
        Details.prototype.rawQuery = "";

        /**
         * Details operationName.
         * @member {string} operationName
         * @memberof Trace.Details
         * @instance
         */
        Details.prototype.operationName = "";

        /**
         * Creates a new Details instance using the specified properties.
         * @function create
         * @memberof Trace.Details
         * @static
         * @param {Trace.IDetails=} [properties] Properties to set
         * @returns {Trace.Details} Details instance
         */
        Details.create = function create(properties) {
            return new Details(properties);
        };

        /**
         * Encodes the specified Details message. Does not implicitly {@link Trace.Details.verify|verify} messages.
         * @function encode
         * @memberof Trace.Details
         * @static
         * @param {Trace.IDetails} message Details message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Details.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.variables != null && Object.hasOwnProperty.call(message, "variables"))
                for (var keys = Object.keys(message.variables), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).bytes(message.variables[keys[i]]).ldelim();
            if (message.rawQuery != null && Object.hasOwnProperty.call(message, "rawQuery"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.rawQuery);
            if (message.operationName != null && Object.hasOwnProperty.call(message, "operationName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.operationName);
            if (message.variablesJson != null && Object.hasOwnProperty.call(message, "variablesJson"))
                for (var keys = Object.keys(message.variablesJson), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.variablesJson[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Details message, length delimited. Does not implicitly {@link Trace.Details.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Trace.Details
         * @static
         * @param {Trace.IDetails} message Details message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Details.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Details message from the specified reader or buffer.
         * @function decode
         * @memberof Trace.Details
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Trace.Details} Details
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Details.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Trace.Details(), key;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 4:
                    reader.skip().pos++;
                    if (message.variablesJson === $util.emptyObject)
                        message.variablesJson = {};
                    key = reader.string();
                    reader.pos++;
                    message.variablesJson[key] = reader.string();
                    break;
                case 1:
                    reader.skip().pos++;
                    if (message.variables === $util.emptyObject)
                        message.variables = {};
                    key = reader.string();
                    reader.pos++;
                    message.variables[key] = reader.bytes();
                    break;
                case 2:
                    message.rawQuery = reader.string();
                    break;
                case 3:
                    message.operationName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Details message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Trace.Details
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Trace.Details} Details
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Details.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Details message.
         * @function verify
         * @memberof Trace.Details
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Details.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.variablesJson != null && message.hasOwnProperty("variablesJson")) {
                if (!$util.isObject(message.variablesJson))
                    return "variablesJson: object expected";
                var key = Object.keys(message.variablesJson);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isString(message.variablesJson[key[i]]))
                        return "variablesJson: string{k:string} expected";
            }
            if (message.variables != null && message.hasOwnProperty("variables")) {
                if (!$util.isObject(message.variables))
                    return "variables: object expected";
                var key = Object.keys(message.variables);
                for (var i = 0; i < key.length; ++i)
                    if (!(message.variables[key[i]] && typeof message.variables[key[i]].length === "number" || $util.isString(message.variables[key[i]])))
                        return "variables: buffer{k:string} expected";
            }
            if (message.rawQuery != null && message.hasOwnProperty("rawQuery"))
                if (!$util.isString(message.rawQuery))
                    return "rawQuery: string expected";
            if (message.operationName != null && message.hasOwnProperty("operationName"))
                if (!$util.isString(message.operationName))
                    return "operationName: string expected";
            return null;
        };

        /**
         * Creates a Details message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Trace.Details
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Trace.Details} Details
         */
        Details.fromObject = function fromObject(object) {
            if (object instanceof $root.Trace.Details)
                return object;
            var message = new $root.Trace.Details();
            if (object.variablesJson) {
                if (typeof object.variablesJson !== "object")
                    throw TypeError(".Trace.Details.variablesJson: object expected");
                message.variablesJson = {};
                for (var keys = Object.keys(object.variablesJson), i = 0; i < keys.length; ++i)
                    message.variablesJson[keys[i]] = String(object.variablesJson[keys[i]]);
            }
            if (object.variables) {
                if (typeof object.variables !== "object")
                    throw TypeError(".Trace.Details.variables: object expected");
                message.variables = {};
                for (var keys = Object.keys(object.variables), i = 0; i < keys.length; ++i)
                    if (typeof object.variables[keys[i]] === "string")
                        $util.base64.decode(object.variables[keys[i]], message.variables[keys[i]] = $util.newBuffer($util.base64.length(object.variables[keys[i]])), 0);
                    else if (object.variables[keys[i]].length)
                        message.variables[keys[i]] = object.variables[keys[i]];
            }
            if (object.rawQuery != null)
                message.rawQuery = String(object.rawQuery);
            if (object.operationName != null)
                message.operationName = String(object.operationName);
            return message;
        };

        /**
         * Creates a plain object from a Details message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Trace.Details
         * @static
         * @param {Trace.Details} message Details
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Details.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults) {
                object.variables = {};
                object.variablesJson = {};
            }
            if (options.defaults) {
                object.rawQuery = "";
                object.operationName = "";
            }
            var keys2;
            if (message.variables && (keys2 = Object.keys(message.variables)).length) {
                object.variables = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.variables[keys2[j]] = options.bytes === String ? $util.base64.encode(message.variables[keys2[j]], 0, message.variables[keys2[j]].length) : options.bytes === Array ? Array.prototype.slice.call(message.variables[keys2[j]]) : message.variables[keys2[j]];
            }
            if (message.rawQuery != null && message.hasOwnProperty("rawQuery"))
                object.rawQuery = message.rawQuery;
            if (message.operationName != null && message.hasOwnProperty("operationName"))
                object.operationName = message.operationName;
            if (message.variablesJson && (keys2 = Object.keys(message.variablesJson)).length) {
                object.variablesJson = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.variablesJson[keys2[j]] = message.variablesJson[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this Details to JSON.
         * @function toJSON
         * @memberof Trace.Details
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Details.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Details;
    })();

    Trace.Error = (function() {

        /**
         * Properties of an Error.
         * @memberof Trace
         * @interface IError
         * @property {string|null} [message] Error message
         * @property {Array.<Trace.ILocation>|null} [location] Error location
         * @property {number|null} [timeNs] Error timeNs
         * @property {string|null} [json] Error json
         */

        /**
         * Constructs a new Error.
         * @memberof Trace
         * @classdesc Represents an Error.
         * @implements IError
         * @constructor
         * @param {Trace.IError=} [properties] Properties to set
         */
        function Error(properties) {
            this.location = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Error message.
         * @member {string} message
         * @memberof Trace.Error
         * @instance
         */
        Error.prototype.message = "";

        /**
         * Error location.
         * @member {Array.<Trace.ILocation>} location
         * @memberof Trace.Error
         * @instance
         */
        Error.prototype.location = $util.emptyArray;

        /**
         * Error timeNs.
         * @member {number} timeNs
         * @memberof Trace.Error
         * @instance
         */
        Error.prototype.timeNs = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Error json.
         * @member {string} json
         * @memberof Trace.Error
         * @instance
         */
        Error.prototype.json = "";

        /**
         * Creates a new Error instance using the specified properties.
         * @function create
         * @memberof Trace.Error
         * @static
         * @param {Trace.IError=} [properties] Properties to set
         * @returns {Trace.Error} Error instance
         */
        Error.create = function create(properties) {
            return new Error(properties);
        };

        /**
         * Encodes the specified Error message. Does not implicitly {@link Trace.Error.verify|verify} messages.
         * @function encode
         * @memberof Trace.Error
         * @static
         * @param {Trace.IError} message Error message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Error.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
            if (message.location != null && message.location.length)
                for (var i = 0; i < message.location.length; ++i)
                    $root.Trace.Location.encode(message.location[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.timeNs != null && Object.hasOwnProperty.call(message, "timeNs"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.timeNs);
            if (message.json != null && Object.hasOwnProperty.call(message, "json"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.json);
            return writer;
        };

        /**
         * Encodes the specified Error message, length delimited. Does not implicitly {@link Trace.Error.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Trace.Error
         * @static
         * @param {Trace.IError} message Error message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Error.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Error message from the specified reader or buffer.
         * @function decode
         * @memberof Trace.Error
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Trace.Error} Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Error.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Trace.Error();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
                    break;
                case 2:
                    if (!(message.location && message.location.length))
                        message.location = [];
                    message.location.push($root.Trace.Location.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.timeNs = reader.uint64();
                    break;
                case 4:
                    message.json = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Error message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Trace.Error
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Trace.Error} Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Error.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Error message.
         * @function verify
         * @memberof Trace.Error
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Error.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.location != null && message.hasOwnProperty("location")) {
                if (!Array.isArray(message.location))
                    return "location: array expected";
                for (var i = 0; i < message.location.length; ++i) {
                    var error = $root.Trace.Location.verify(message.location[i]);
                    if (error)
                        return "location." + error;
                }
            }
            if (message.timeNs != null && message.hasOwnProperty("timeNs"))
                if (!$util.isInteger(message.timeNs) && !(message.timeNs && $util.isInteger(message.timeNs.low) && $util.isInteger(message.timeNs.high)))
                    return "timeNs: integer|Long expected";
            if (message.json != null && message.hasOwnProperty("json"))
                if (!$util.isString(message.json))
                    return "json: string expected";
            return null;
        };

        /**
         * Creates an Error message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Trace.Error
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Trace.Error} Error
         */
        Error.fromObject = function fromObject(object) {
            if (object instanceof $root.Trace.Error)
                return object;
            var message = new $root.Trace.Error();
            if (object.message != null)
                message.message = String(object.message);
            if (object.location) {
                if (!Array.isArray(object.location))
                    throw TypeError(".Trace.Error.location: array expected");
                message.location = [];
                for (var i = 0; i < object.location.length; ++i) {
                    if (typeof object.location[i] !== "object")
                        throw TypeError(".Trace.Error.location: object expected");
                    message.location[i] = $root.Trace.Location.fromObject(object.location[i]);
                }
            }
            if (object.timeNs != null)
                if ($util.Long)
                    (message.timeNs = $util.Long.fromValue(object.timeNs)).unsigned = true;
                else if (typeof object.timeNs === "string")
                    message.timeNs = parseInt(object.timeNs, 10);
                else if (typeof object.timeNs === "number")
                    message.timeNs = object.timeNs;
                else if (typeof object.timeNs === "object")
                    message.timeNs = new $util.LongBits(object.timeNs.low >>> 0, object.timeNs.high >>> 0).toNumber(true);
            if (object.json != null)
                message.json = String(object.json);
            return message;
        };

        /**
         * Creates a plain object from an Error message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Trace.Error
         * @static
         * @param {Trace.Error} message Error
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Error.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.location = [];
            if (options.defaults) {
                object.message = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.timeNs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timeNs = options.longs === String ? "0" : 0;
                object.json = "";
            }
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.location && message.location.length) {
                object.location = [];
                for (var j = 0; j < message.location.length; ++j)
                    object.location[j] = $root.Trace.Location.toObject(message.location[j], options);
            }
            if (message.timeNs != null && message.hasOwnProperty("timeNs"))
                if (typeof message.timeNs === "number")
                    object.timeNs = options.longs === String ? String(message.timeNs) : message.timeNs;
                else
                    object.timeNs = options.longs === String ? $util.Long.prototype.toString.call(message.timeNs) : options.longs === Number ? new $util.LongBits(message.timeNs.low >>> 0, message.timeNs.high >>> 0).toNumber(true) : message.timeNs;
            if (message.json != null && message.hasOwnProperty("json"))
                object.json = message.json;
            return object;
        };

        /**
         * Converts this Error to JSON.
         * @function toJSON
         * @memberof Trace.Error
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Error.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Error;
    })();

    Trace.HTTP = (function() {

        /**
         * Properties of a HTTP.
         * @memberof Trace
         * @interface IHTTP
         * @property {Trace.HTTP.Method|null} [method] HTTP method
         * @property {string|null} [host] HTTP host
         * @property {string|null} [path] HTTP path
         * @property {Object.<string,Trace.HTTP.IValues>|null} [requestHeaders] HTTP requestHeaders
         * @property {Object.<string,Trace.HTTP.IValues>|null} [responseHeaders] HTTP responseHeaders
         * @property {number|null} [statusCode] HTTP statusCode
         * @property {boolean|null} [secure] HTTP secure
         * @property {string|null} [protocol] HTTP protocol
         */

        /**
         * Constructs a new HTTP.
         * @memberof Trace
         * @classdesc Represents a HTTP.
         * @implements IHTTP
         * @constructor
         * @param {Trace.IHTTP=} [properties] Properties to set
         */
        function HTTP(properties) {
            this.requestHeaders = {};
            this.responseHeaders = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HTTP method.
         * @member {Trace.HTTP.Method} method
         * @memberof Trace.HTTP
         * @instance
         */
        HTTP.prototype.method = 0;

        /**
         * HTTP host.
         * @member {string} host
         * @memberof Trace.HTTP
         * @instance
         */
        HTTP.prototype.host = "";

        /**
         * HTTP path.
         * @member {string} path
         * @memberof Trace.HTTP
         * @instance
         */
        HTTP.prototype.path = "";

        /**
         * HTTP requestHeaders.
         * @member {Object.<string,Trace.HTTP.IValues>} requestHeaders
         * @memberof Trace.HTTP
         * @instance
         */
        HTTP.prototype.requestHeaders = $util.emptyObject;

        /**
         * HTTP responseHeaders.
         * @member {Object.<string,Trace.HTTP.IValues>} responseHeaders
         * @memberof Trace.HTTP
         * @instance
         */
        HTTP.prototype.responseHeaders = $util.emptyObject;

        /**
         * HTTP statusCode.
         * @member {number} statusCode
         * @memberof Trace.HTTP
         * @instance
         */
        HTTP.prototype.statusCode = 0;

        /**
         * HTTP secure.
         * @member {boolean} secure
         * @memberof Trace.HTTP
         * @instance
         */
        HTTP.prototype.secure = false;

        /**
         * HTTP protocol.
         * @member {string} protocol
         * @memberof Trace.HTTP
         * @instance
         */
        HTTP.prototype.protocol = "";

        /**
         * Creates a new HTTP instance using the specified properties.
         * @function create
         * @memberof Trace.HTTP
         * @static
         * @param {Trace.IHTTP=} [properties] Properties to set
         * @returns {Trace.HTTP} HTTP instance
         */
        HTTP.create = function create(properties) {
            return new HTTP(properties);
        };

        /**
         * Encodes the specified HTTP message. Does not implicitly {@link Trace.HTTP.verify|verify} messages.
         * @function encode
         * @memberof Trace.HTTP
         * @static
         * @param {Trace.IHTTP} message HTTP message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HTTP.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.method != null && Object.hasOwnProperty.call(message, "method"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.method);
            if (message.host != null && Object.hasOwnProperty.call(message, "host"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.host);
            if (message.path != null && Object.hasOwnProperty.call(message, "path"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.path);
            if (message.requestHeaders != null && Object.hasOwnProperty.call(message, "requestHeaders"))
                for (var keys = Object.keys(message.requestHeaders), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 4, wireType 2 =*/34).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.Trace.HTTP.Values.encode(message.requestHeaders[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.responseHeaders != null && Object.hasOwnProperty.call(message, "responseHeaders"))
                for (var keys = Object.keys(message.responseHeaders), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 5, wireType 2 =*/42).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.Trace.HTTP.Values.encode(message.responseHeaders[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.statusCode != null && Object.hasOwnProperty.call(message, "statusCode"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.statusCode);
            if (message.secure != null && Object.hasOwnProperty.call(message, "secure"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.secure);
            if (message.protocol != null && Object.hasOwnProperty.call(message, "protocol"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.protocol);
            return writer;
        };

        /**
         * Encodes the specified HTTP message, length delimited. Does not implicitly {@link Trace.HTTP.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Trace.HTTP
         * @static
         * @param {Trace.IHTTP} message HTTP message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HTTP.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HTTP message from the specified reader or buffer.
         * @function decode
         * @memberof Trace.HTTP
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Trace.HTTP} HTTP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HTTP.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Trace.HTTP(), key;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.method = reader.int32();
                    break;
                case 2:
                    message.host = reader.string();
                    break;
                case 3:
                    message.path = reader.string();
                    break;
                case 4:
                    reader.skip().pos++;
                    if (message.requestHeaders === $util.emptyObject)
                        message.requestHeaders = {};
                    key = reader.string();
                    reader.pos++;
                    message.requestHeaders[key] = $root.Trace.HTTP.Values.decode(reader, reader.uint32());
                    break;
                case 5:
                    reader.skip().pos++;
                    if (message.responseHeaders === $util.emptyObject)
                        message.responseHeaders = {};
                    key = reader.string();
                    reader.pos++;
                    message.responseHeaders[key] = $root.Trace.HTTP.Values.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.statusCode = reader.uint32();
                    break;
                case 8:
                    message.secure = reader.bool();
                    break;
                case 9:
                    message.protocol = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HTTP message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Trace.HTTP
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Trace.HTTP} HTTP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HTTP.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HTTP message.
         * @function verify
         * @memberof Trace.HTTP
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HTTP.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.method != null && message.hasOwnProperty("method"))
                switch (message.method) {
                default:
                    return "method: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                    break;
                }
            if (message.host != null && message.hasOwnProperty("host"))
                if (!$util.isString(message.host))
                    return "host: string expected";
            if (message.path != null && message.hasOwnProperty("path"))
                if (!$util.isString(message.path))
                    return "path: string expected";
            if (message.requestHeaders != null && message.hasOwnProperty("requestHeaders")) {
                if (!$util.isObject(message.requestHeaders))
                    return "requestHeaders: object expected";
                var key = Object.keys(message.requestHeaders);
                for (var i = 0; i < key.length; ++i) {
                    var error = $root.Trace.HTTP.Values.verify(message.requestHeaders[key[i]]);
                    if (error)
                        return "requestHeaders." + error;
                }
            }
            if (message.responseHeaders != null && message.hasOwnProperty("responseHeaders")) {
                if (!$util.isObject(message.responseHeaders))
                    return "responseHeaders: object expected";
                var key = Object.keys(message.responseHeaders);
                for (var i = 0; i < key.length; ++i) {
                    var error = $root.Trace.HTTP.Values.verify(message.responseHeaders[key[i]]);
                    if (error)
                        return "responseHeaders." + error;
                }
            }
            if (message.statusCode != null && message.hasOwnProperty("statusCode"))
                if (!$util.isInteger(message.statusCode))
                    return "statusCode: integer expected";
            if (message.secure != null && message.hasOwnProperty("secure"))
                if (typeof message.secure !== "boolean")
                    return "secure: boolean expected";
            if (message.protocol != null && message.hasOwnProperty("protocol"))
                if (!$util.isString(message.protocol))
                    return "protocol: string expected";
            return null;
        };

        /**
         * Creates a HTTP message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Trace.HTTP
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Trace.HTTP} HTTP
         */
        HTTP.fromObject = function fromObject(object) {
            if (object instanceof $root.Trace.HTTP)
                return object;
            var message = new $root.Trace.HTTP();
            switch (object.method) {
            case "UNKNOWN":
            case 0:
                message.method = 0;
                break;
            case "OPTIONS":
            case 1:
                message.method = 1;
                break;
            case "GET":
            case 2:
                message.method = 2;
                break;
            case "HEAD":
            case 3:
                message.method = 3;
                break;
            case "POST":
            case 4:
                message.method = 4;
                break;
            case "PUT":
            case 5:
                message.method = 5;
                break;
            case "DELETE":
            case 6:
                message.method = 6;
                break;
            case "TRACE":
            case 7:
                message.method = 7;
                break;
            case "CONNECT":
            case 8:
                message.method = 8;
                break;
            case "PATCH":
            case 9:
                message.method = 9;
                break;
            }
            if (object.host != null)
                message.host = String(object.host);
            if (object.path != null)
                message.path = String(object.path);
            if (object.requestHeaders) {
                if (typeof object.requestHeaders !== "object")
                    throw TypeError(".Trace.HTTP.requestHeaders: object expected");
                message.requestHeaders = {};
                for (var keys = Object.keys(object.requestHeaders), i = 0; i < keys.length; ++i) {
                    if (typeof object.requestHeaders[keys[i]] !== "object")
                        throw TypeError(".Trace.HTTP.requestHeaders: object expected");
                    message.requestHeaders[keys[i]] = $root.Trace.HTTP.Values.fromObject(object.requestHeaders[keys[i]]);
                }
            }
            if (object.responseHeaders) {
                if (typeof object.responseHeaders !== "object")
                    throw TypeError(".Trace.HTTP.responseHeaders: object expected");
                message.responseHeaders = {};
                for (var keys = Object.keys(object.responseHeaders), i = 0; i < keys.length; ++i) {
                    if (typeof object.responseHeaders[keys[i]] !== "object")
                        throw TypeError(".Trace.HTTP.responseHeaders: object expected");
                    message.responseHeaders[keys[i]] = $root.Trace.HTTP.Values.fromObject(object.responseHeaders[keys[i]]);
                }
            }
            if (object.statusCode != null)
                message.statusCode = object.statusCode >>> 0;
            if (object.secure != null)
                message.secure = Boolean(object.secure);
            if (object.protocol != null)
                message.protocol = String(object.protocol);
            return message;
        };

        /**
         * Creates a plain object from a HTTP message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Trace.HTTP
         * @static
         * @param {Trace.HTTP} message HTTP
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HTTP.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults) {
                object.requestHeaders = {};
                object.responseHeaders = {};
            }
            if (options.defaults) {
                object.method = options.enums === String ? "UNKNOWN" : 0;
                object.host = "";
                object.path = "";
                object.statusCode = 0;
                object.secure = false;
                object.protocol = "";
            }
            if (message.method != null && message.hasOwnProperty("method"))
                object.method = options.enums === String ? $root.Trace.HTTP.Method[message.method] : message.method;
            if (message.host != null && message.hasOwnProperty("host"))
                object.host = message.host;
            if (message.path != null && message.hasOwnProperty("path"))
                object.path = message.path;
            var keys2;
            if (message.requestHeaders && (keys2 = Object.keys(message.requestHeaders)).length) {
                object.requestHeaders = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.requestHeaders[keys2[j]] = $root.Trace.HTTP.Values.toObject(message.requestHeaders[keys2[j]], options);
            }
            if (message.responseHeaders && (keys2 = Object.keys(message.responseHeaders)).length) {
                object.responseHeaders = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.responseHeaders[keys2[j]] = $root.Trace.HTTP.Values.toObject(message.responseHeaders[keys2[j]], options);
            }
            if (message.statusCode != null && message.hasOwnProperty("statusCode"))
                object.statusCode = message.statusCode;
            if (message.secure != null && message.hasOwnProperty("secure"))
                object.secure = message.secure;
            if (message.protocol != null && message.hasOwnProperty("protocol"))
                object.protocol = message.protocol;
            return object;
        };

        /**
         * Converts this HTTP to JSON.
         * @function toJSON
         * @memberof Trace.HTTP
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HTTP.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        HTTP.Values = (function() {

            /**
             * Properties of a Values.
             * @memberof Trace.HTTP
             * @interface IValues
             * @property {Array.<string>|null} [value] Values value
             */

            /**
             * Constructs a new Values.
             * @memberof Trace.HTTP
             * @classdesc Represents a Values.
             * @implements IValues
             * @constructor
             * @param {Trace.HTTP.IValues=} [properties] Properties to set
             */
            function Values(properties) {
                this.value = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Values value.
             * @member {Array.<string>} value
             * @memberof Trace.HTTP.Values
             * @instance
             */
            Values.prototype.value = $util.emptyArray;

            /**
             * Creates a new Values instance using the specified properties.
             * @function create
             * @memberof Trace.HTTP.Values
             * @static
             * @param {Trace.HTTP.IValues=} [properties] Properties to set
             * @returns {Trace.HTTP.Values} Values instance
             */
            Values.create = function create(properties) {
                return new Values(properties);
            };

            /**
             * Encodes the specified Values message. Does not implicitly {@link Trace.HTTP.Values.verify|verify} messages.
             * @function encode
             * @memberof Trace.HTTP.Values
             * @static
             * @param {Trace.HTTP.IValues} message Values message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Values.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && message.value.length)
                    for (var i = 0; i < message.value.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.value[i]);
                return writer;
            };

            /**
             * Encodes the specified Values message, length delimited. Does not implicitly {@link Trace.HTTP.Values.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Trace.HTTP.Values
             * @static
             * @param {Trace.HTTP.IValues} message Values message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Values.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Values message from the specified reader or buffer.
             * @function decode
             * @memberof Trace.HTTP.Values
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Trace.HTTP.Values} Values
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Values.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Trace.HTTP.Values();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.value && message.value.length))
                            message.value = [];
                        message.value.push(reader.string());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Values message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Trace.HTTP.Values
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Trace.HTTP.Values} Values
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Values.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Values message.
             * @function verify
             * @memberof Trace.HTTP.Values
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Values.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value")) {
                    if (!Array.isArray(message.value))
                        return "value: array expected";
                    for (var i = 0; i < message.value.length; ++i)
                        if (!$util.isString(message.value[i]))
                            return "value: string[] expected";
                }
                return null;
            };

            /**
             * Creates a Values message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Trace.HTTP.Values
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Trace.HTTP.Values} Values
             */
            Values.fromObject = function fromObject(object) {
                if (object instanceof $root.Trace.HTTP.Values)
                    return object;
                var message = new $root.Trace.HTTP.Values();
                if (object.value) {
                    if (!Array.isArray(object.value))
                        throw TypeError(".Trace.HTTP.Values.value: array expected");
                    message.value = [];
                    for (var i = 0; i < object.value.length; ++i)
                        message.value[i] = String(object.value[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a Values message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Trace.HTTP.Values
             * @static
             * @param {Trace.HTTP.Values} message Values
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Values.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.value = [];
                if (message.value && message.value.length) {
                    object.value = [];
                    for (var j = 0; j < message.value.length; ++j)
                        object.value[j] = message.value[j];
                }
                return object;
            };

            /**
             * Converts this Values to JSON.
             * @function toJSON
             * @memberof Trace.HTTP.Values
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Values.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Values;
        })();

        /**
         * Method enum.
         * @name Trace.HTTP.Method
         * @enum {string}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} OPTIONS=1 OPTIONS value
         * @property {number} GET=2 GET value
         * @property {number} HEAD=3 HEAD value
         * @property {number} POST=4 POST value
         * @property {number} PUT=5 PUT value
         * @property {number} DELETE=6 DELETE value
         * @property {number} TRACE=7 TRACE value
         * @property {number} CONNECT=8 CONNECT value
         * @property {number} PATCH=9 PATCH value
         */
        HTTP.Method = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "OPTIONS"] = 1;
            values[valuesById[2] = "GET"] = 2;
            values[valuesById[3] = "HEAD"] = 3;
            values[valuesById[4] = "POST"] = 4;
            values[valuesById[5] = "PUT"] = 5;
            values[valuesById[6] = "DELETE"] = 6;
            values[valuesById[7] = "TRACE"] = 7;
            values[valuesById[8] = "CONNECT"] = 8;
            values[valuesById[9] = "PATCH"] = 9;
            return values;
        })();

        return HTTP;
    })();

    Trace.Location = (function() {

        /**
         * Properties of a Location.
         * @memberof Trace
         * @interface ILocation
         * @property {number|null} [line] Location line
         * @property {number|null} [column] Location column
         */

        /**
         * Constructs a new Location.
         * @memberof Trace
         * @classdesc Represents a Location.
         * @implements ILocation
         * @constructor
         * @param {Trace.ILocation=} [properties] Properties to set
         */
        function Location(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Location line.
         * @member {number} line
         * @memberof Trace.Location
         * @instance
         */
        Location.prototype.line = 0;

        /**
         * Location column.
         * @member {number} column
         * @memberof Trace.Location
         * @instance
         */
        Location.prototype.column = 0;

        /**
         * Creates a new Location instance using the specified properties.
         * @function create
         * @memberof Trace.Location
         * @static
         * @param {Trace.ILocation=} [properties] Properties to set
         * @returns {Trace.Location} Location instance
         */
        Location.create = function create(properties) {
            return new Location(properties);
        };

        /**
         * Encodes the specified Location message. Does not implicitly {@link Trace.Location.verify|verify} messages.
         * @function encode
         * @memberof Trace.Location
         * @static
         * @param {Trace.ILocation} message Location message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Location.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.line != null && Object.hasOwnProperty.call(message, "line"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.line);
            if (message.column != null && Object.hasOwnProperty.call(message, "column"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.column);
            return writer;
        };

        /**
         * Encodes the specified Location message, length delimited. Does not implicitly {@link Trace.Location.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Trace.Location
         * @static
         * @param {Trace.ILocation} message Location message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Location.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Location message from the specified reader or buffer.
         * @function decode
         * @memberof Trace.Location
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Trace.Location} Location
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Location.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Trace.Location();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.line = reader.uint32();
                    break;
                case 2:
                    message.column = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Location message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Trace.Location
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Trace.Location} Location
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Location.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Location message.
         * @function verify
         * @memberof Trace.Location
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Location.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.line != null && message.hasOwnProperty("line"))
                if (!$util.isInteger(message.line))
                    return "line: integer expected";
            if (message.column != null && message.hasOwnProperty("column"))
                if (!$util.isInteger(message.column))
                    return "column: integer expected";
            return null;
        };

        /**
         * Creates a Location message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Trace.Location
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Trace.Location} Location
         */
        Location.fromObject = function fromObject(object) {
            if (object instanceof $root.Trace.Location)
                return object;
            var message = new $root.Trace.Location();
            if (object.line != null)
                message.line = object.line >>> 0;
            if (object.column != null)
                message.column = object.column >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a Location message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Trace.Location
         * @static
         * @param {Trace.Location} message Location
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Location.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.line = 0;
                object.column = 0;
            }
            if (message.line != null && message.hasOwnProperty("line"))
                object.line = message.line;
            if (message.column != null && message.hasOwnProperty("column"))
                object.column = message.column;
            return object;
        };

        /**
         * Converts this Location to JSON.
         * @function toJSON
         * @memberof Trace.Location
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Location.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Location;
    })();

    Trace.Node = (function() {

        /**
         * Properties of a Node.
         * @memberof Trace
         * @interface INode
         * @property {string|null} [responseName] Node responseName
         * @property {number|null} [index] Node index
         * @property {string|null} [originalFieldName] Node originalFieldName
         * @property {string|null} [type] Node type
         * @property {string|null} [parentType] Node parentType
         * @property {Trace.ICachePolicy|null} [cachePolicy] Node cachePolicy
         * @property {number|null} [startTime] Node startTime
         * @property {number|null} [endTime] Node endTime
         * @property {Array.<Trace.IError>|null} [error] Node error
         * @property {Array.<Trace.INode>|null} [child] Node child
         */

        /**
         * Constructs a new Node.
         * @memberof Trace
         * @classdesc Represents a Node.
         * @implements INode
         * @constructor
         * @param {Trace.INode=} [properties] Properties to set
         */
        function Node(properties) {
            this.error = [];
            this.child = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Node responseName.
         * @member {string} responseName
         * @memberof Trace.Node
         * @instance
         */
        Node.prototype.responseName = "";

        /**
         * Node index.
         * @member {number} index
         * @memberof Trace.Node
         * @instance
         */
        Node.prototype.index = 0;

        /**
         * Node originalFieldName.
         * @member {string} originalFieldName
         * @memberof Trace.Node
         * @instance
         */
        Node.prototype.originalFieldName = "";

        /**
         * Node type.
         * @member {string} type
         * @memberof Trace.Node
         * @instance
         */
        Node.prototype.type = "";

        /**
         * Node parentType.
         * @member {string} parentType
         * @memberof Trace.Node
         * @instance
         */
        Node.prototype.parentType = "";

        /**
         * Node cachePolicy.
         * @member {Trace.ICachePolicy|null|undefined} cachePolicy
         * @memberof Trace.Node
         * @instance
         */
        Node.prototype.cachePolicy = null;

        /**
         * Node startTime.
         * @member {number} startTime
         * @memberof Trace.Node
         * @instance
         */
        Node.prototype.startTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Node endTime.
         * @member {number} endTime
         * @memberof Trace.Node
         * @instance
         */
        Node.prototype.endTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Node error.
         * @member {Array.<Trace.IError>} error
         * @memberof Trace.Node
         * @instance
         */
        Node.prototype.error = $util.emptyArray;

        /**
         * Node child.
         * @member {Array.<Trace.INode>} child
         * @memberof Trace.Node
         * @instance
         */
        Node.prototype.child = $util.emptyArray;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * Node id.
         * @member {"responseName"|"index"|undefined} id
         * @memberof Trace.Node
         * @instance
         */
        Object.defineProperty(Node.prototype, "id", {
            get: $util.oneOfGetter($oneOfFields = ["responseName", "index"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Node instance using the specified properties.
         * @function create
         * @memberof Trace.Node
         * @static
         * @param {Trace.INode=} [properties] Properties to set
         * @returns {Trace.Node} Node instance
         */
        Node.create = function create(properties) {
            return new Node(properties);
        };

        /**
         * Encodes the specified Node message. Does not implicitly {@link Trace.Node.verify|verify} messages.
         * @function encode
         * @memberof Trace.Node
         * @static
         * @param {Trace.INode} message Node message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Node.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.responseName != null && Object.hasOwnProperty.call(message, "responseName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.responseName);
            if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.index);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.type);
            if (message.cachePolicy != null && Object.hasOwnProperty.call(message, "cachePolicy"))
                $root.Trace.CachePolicy.encode(message.cachePolicy, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.startTime != null && Object.hasOwnProperty.call(message, "startTime"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.startTime);
            if (message.endTime != null && Object.hasOwnProperty.call(message, "endTime"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint64(message.endTime);
            if (message.error != null && message.error.length)
                for (var i = 0; i < message.error.length; ++i)
                    $root.Trace.Error.encode(message.error[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.child != null && message.child.length)
                for (var i = 0; i < message.child.length; ++i)
                    $root.Trace.Node.encode(message.child[i], writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.parentType != null && Object.hasOwnProperty.call(message, "parentType"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.parentType);
            if (message.originalFieldName != null && Object.hasOwnProperty.call(message, "originalFieldName"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.originalFieldName);
            return writer;
        };

        /**
         * Encodes the specified Node message, length delimited. Does not implicitly {@link Trace.Node.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Trace.Node
         * @static
         * @param {Trace.INode} message Node message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Node.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Node message from the specified reader or buffer.
         * @function decode
         * @memberof Trace.Node
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Trace.Node} Node
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Node.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Trace.Node();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.responseName = reader.string();
                    break;
                case 2:
                    message.index = reader.uint32();
                    break;
                case 14:
                    message.originalFieldName = reader.string();
                    break;
                case 3:
                    message.type = reader.string();
                    break;
                case 13:
                    message.parentType = reader.string();
                    break;
                case 5:
                    message.cachePolicy = $root.Trace.CachePolicy.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.startTime = reader.uint64();
                    break;
                case 9:
                    message.endTime = reader.uint64();
                    break;
                case 11:
                    if (!(message.error && message.error.length))
                        message.error = [];
                    message.error.push($root.Trace.Error.decode(reader, reader.uint32()));
                    break;
                case 12:
                    if (!(message.child && message.child.length))
                        message.child = [];
                    message.child.push($root.Trace.Node.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Node message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Trace.Node
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Trace.Node} Node
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Node.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Node message.
         * @function verify
         * @memberof Trace.Node
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Node.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.responseName != null && message.hasOwnProperty("responseName")) {
                properties.id = 1;
                if (!$util.isString(message.responseName))
                    return "responseName: string expected";
            }
            if (message.index != null && message.hasOwnProperty("index")) {
                if (properties.id === 1)
                    return "id: multiple values";
                properties.id = 1;
                if (!$util.isInteger(message.index))
                    return "index: integer expected";
            }
            if (message.originalFieldName != null && message.hasOwnProperty("originalFieldName"))
                if (!$util.isString(message.originalFieldName))
                    return "originalFieldName: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.parentType != null && message.hasOwnProperty("parentType"))
                if (!$util.isString(message.parentType))
                    return "parentType: string expected";
            if (message.cachePolicy != null && message.hasOwnProperty("cachePolicy")) {
                var error = $root.Trace.CachePolicy.verify(message.cachePolicy);
                if (error)
                    return "cachePolicy." + error;
            }
            if (message.startTime != null && message.hasOwnProperty("startTime"))
                if (!$util.isInteger(message.startTime) && !(message.startTime && $util.isInteger(message.startTime.low) && $util.isInteger(message.startTime.high)))
                    return "startTime: integer|Long expected";
            if (message.endTime != null && message.hasOwnProperty("endTime"))
                if (!$util.isInteger(message.endTime) && !(message.endTime && $util.isInteger(message.endTime.low) && $util.isInteger(message.endTime.high)))
                    return "endTime: integer|Long expected";
            if (message.error != null && message.hasOwnProperty("error")) {
                if (!Array.isArray(message.error))
                    return "error: array expected";
                for (var i = 0; i < message.error.length; ++i) {
                    var error = $root.Trace.Error.verify(message.error[i]);
                    if (error)
                        return "error." + error;
                }
            }
            if (message.child != null && message.hasOwnProperty("child")) {
                if (!Array.isArray(message.child))
                    return "child: array expected";
                for (var i = 0; i < message.child.length; ++i) {
                    var error = $root.Trace.Node.verify(message.child[i]);
                    if (error)
                        return "child." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Node message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Trace.Node
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Trace.Node} Node
         */
        Node.fromObject = function fromObject(object) {
            if (object instanceof $root.Trace.Node)
                return object;
            var message = new $root.Trace.Node();
            if (object.responseName != null)
                message.responseName = String(object.responseName);
            if (object.index != null)
                message.index = object.index >>> 0;
            if (object.originalFieldName != null)
                message.originalFieldName = String(object.originalFieldName);
            if (object.type != null)
                message.type = String(object.type);
            if (object.parentType != null)
                message.parentType = String(object.parentType);
            if (object.cachePolicy != null) {
                if (typeof object.cachePolicy !== "object")
                    throw TypeError(".Trace.Node.cachePolicy: object expected");
                message.cachePolicy = $root.Trace.CachePolicy.fromObject(object.cachePolicy);
            }
            if (object.startTime != null)
                if ($util.Long)
                    (message.startTime = $util.Long.fromValue(object.startTime)).unsigned = true;
                else if (typeof object.startTime === "string")
                    message.startTime = parseInt(object.startTime, 10);
                else if (typeof object.startTime === "number")
                    message.startTime = object.startTime;
                else if (typeof object.startTime === "object")
                    message.startTime = new $util.LongBits(object.startTime.low >>> 0, object.startTime.high >>> 0).toNumber(true);
            if (object.endTime != null)
                if ($util.Long)
                    (message.endTime = $util.Long.fromValue(object.endTime)).unsigned = true;
                else if (typeof object.endTime === "string")
                    message.endTime = parseInt(object.endTime, 10);
                else if (typeof object.endTime === "number")
                    message.endTime = object.endTime;
                else if (typeof object.endTime === "object")
                    message.endTime = new $util.LongBits(object.endTime.low >>> 0, object.endTime.high >>> 0).toNumber(true);
            if (object.error) {
                if (!Array.isArray(object.error))
                    throw TypeError(".Trace.Node.error: array expected");
                message.error = [];
                for (var i = 0; i < object.error.length; ++i) {
                    if (typeof object.error[i] !== "object")
                        throw TypeError(".Trace.Node.error: object expected");
                    message.error[i] = $root.Trace.Error.fromObject(object.error[i]);
                }
            }
            if (object.child) {
                if (!Array.isArray(object.child))
                    throw TypeError(".Trace.Node.child: array expected");
                message.child = [];
                for (var i = 0; i < object.child.length; ++i) {
                    if (typeof object.child[i] !== "object")
                        throw TypeError(".Trace.Node.child: object expected");
                    message.child[i] = $root.Trace.Node.fromObject(object.child[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Node message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Trace.Node
         * @static
         * @param {Trace.Node} message Node
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Node.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.error = [];
                object.child = [];
            }
            if (options.defaults) {
                object.type = "";
                object.cachePolicy = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.startTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.startTime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.endTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.endTime = options.longs === String ? "0" : 0;
                object.parentType = "";
                object.originalFieldName = "";
            }
            if (message.responseName != null && message.hasOwnProperty("responseName")) {
                object.responseName = message.responseName;
                if (options.oneofs)
                    object.id = "responseName";
            }
            if (message.index != null && message.hasOwnProperty("index")) {
                object.index = message.index;
                if (options.oneofs)
                    object.id = "index";
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.cachePolicy != null && message.hasOwnProperty("cachePolicy"))
                object.cachePolicy = $root.Trace.CachePolicy.toObject(message.cachePolicy, options);
            if (message.startTime != null && message.hasOwnProperty("startTime"))
                if (typeof message.startTime === "number")
                    object.startTime = options.longs === String ? String(message.startTime) : message.startTime;
                else
                    object.startTime = options.longs === String ? $util.Long.prototype.toString.call(message.startTime) : options.longs === Number ? new $util.LongBits(message.startTime.low >>> 0, message.startTime.high >>> 0).toNumber(true) : message.startTime;
            if (message.endTime != null && message.hasOwnProperty("endTime"))
                if (typeof message.endTime === "number")
                    object.endTime = options.longs === String ? String(message.endTime) : message.endTime;
                else
                    object.endTime = options.longs === String ? $util.Long.prototype.toString.call(message.endTime) : options.longs === Number ? new $util.LongBits(message.endTime.low >>> 0, message.endTime.high >>> 0).toNumber(true) : message.endTime;
            if (message.error && message.error.length) {
                object.error = [];
                for (var j = 0; j < message.error.length; ++j)
                    object.error[j] = $root.Trace.Error.toObject(message.error[j], options);
            }
            if (message.child && message.child.length) {
                object.child = [];
                for (var j = 0; j < message.child.length; ++j)
                    object.child[j] = $root.Trace.Node.toObject(message.child[j], options);
            }
            if (message.parentType != null && message.hasOwnProperty("parentType"))
                object.parentType = message.parentType;
            if (message.originalFieldName != null && message.hasOwnProperty("originalFieldName"))
                object.originalFieldName = message.originalFieldName;
            return object;
        };

        /**
         * Converts this Node to JSON.
         * @function toJSON
         * @memberof Trace.Node
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Node.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Node;
    })();

    Trace.QueryPlanNode = (function() {

        /**
         * Properties of a QueryPlanNode.
         * @memberof Trace
         * @interface IQueryPlanNode
         * @property {Trace.QueryPlanNode.ISequenceNode|null} [sequence] QueryPlanNode sequence
         * @property {Trace.QueryPlanNode.IParallelNode|null} [parallel] QueryPlanNode parallel
         * @property {Trace.QueryPlanNode.IFetchNode|null} [fetch] QueryPlanNode fetch
         * @property {Trace.QueryPlanNode.IFlattenNode|null} [flatten] QueryPlanNode flatten
         */

        /**
         * Constructs a new QueryPlanNode.
         * @memberof Trace
         * @classdesc Represents a QueryPlanNode.
         * @implements IQueryPlanNode
         * @constructor
         * @param {Trace.IQueryPlanNode=} [properties] Properties to set
         */
        function QueryPlanNode(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * QueryPlanNode sequence.
         * @member {Trace.QueryPlanNode.ISequenceNode|null|undefined} sequence
         * @memberof Trace.QueryPlanNode
         * @instance
         */
        QueryPlanNode.prototype.sequence = null;

        /**
         * QueryPlanNode parallel.
         * @member {Trace.QueryPlanNode.IParallelNode|null|undefined} parallel
         * @memberof Trace.QueryPlanNode
         * @instance
         */
        QueryPlanNode.prototype.parallel = null;

        /**
         * QueryPlanNode fetch.
         * @member {Trace.QueryPlanNode.IFetchNode|null|undefined} fetch
         * @memberof Trace.QueryPlanNode
         * @instance
         */
        QueryPlanNode.prototype.fetch = null;

        /**
         * QueryPlanNode flatten.
         * @member {Trace.QueryPlanNode.IFlattenNode|null|undefined} flatten
         * @memberof Trace.QueryPlanNode
         * @instance
         */
        QueryPlanNode.prototype.flatten = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * QueryPlanNode node.
         * @member {"sequence"|"parallel"|"fetch"|"flatten"|undefined} node
         * @memberof Trace.QueryPlanNode
         * @instance
         */
        Object.defineProperty(QueryPlanNode.prototype, "node", {
            get: $util.oneOfGetter($oneOfFields = ["sequence", "parallel", "fetch", "flatten"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new QueryPlanNode instance using the specified properties.
         * @function create
         * @memberof Trace.QueryPlanNode
         * @static
         * @param {Trace.IQueryPlanNode=} [properties] Properties to set
         * @returns {Trace.QueryPlanNode} QueryPlanNode instance
         */
        QueryPlanNode.create = function create(properties) {
            return new QueryPlanNode(properties);
        };

        /**
         * Encodes the specified QueryPlanNode message. Does not implicitly {@link Trace.QueryPlanNode.verify|verify} messages.
         * @function encode
         * @memberof Trace.QueryPlanNode
         * @static
         * @param {Trace.IQueryPlanNode} message QueryPlanNode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QueryPlanNode.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sequence != null && Object.hasOwnProperty.call(message, "sequence"))
                $root.Trace.QueryPlanNode.SequenceNode.encode(message.sequence, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.parallel != null && Object.hasOwnProperty.call(message, "parallel"))
                $root.Trace.QueryPlanNode.ParallelNode.encode(message.parallel, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.fetch != null && Object.hasOwnProperty.call(message, "fetch"))
                $root.Trace.QueryPlanNode.FetchNode.encode(message.fetch, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.flatten != null && Object.hasOwnProperty.call(message, "flatten"))
                $root.Trace.QueryPlanNode.FlattenNode.encode(message.flatten, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified QueryPlanNode message, length delimited. Does not implicitly {@link Trace.QueryPlanNode.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Trace.QueryPlanNode
         * @static
         * @param {Trace.IQueryPlanNode} message QueryPlanNode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QueryPlanNode.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a QueryPlanNode message from the specified reader or buffer.
         * @function decode
         * @memberof Trace.QueryPlanNode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Trace.QueryPlanNode} QueryPlanNode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QueryPlanNode.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Trace.QueryPlanNode();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sequence = $root.Trace.QueryPlanNode.SequenceNode.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.parallel = $root.Trace.QueryPlanNode.ParallelNode.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.fetch = $root.Trace.QueryPlanNode.FetchNode.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.flatten = $root.Trace.QueryPlanNode.FlattenNode.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a QueryPlanNode message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Trace.QueryPlanNode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Trace.QueryPlanNode} QueryPlanNode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QueryPlanNode.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a QueryPlanNode message.
         * @function verify
         * @memberof Trace.QueryPlanNode
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        QueryPlanNode.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.sequence != null && message.hasOwnProperty("sequence")) {
                properties.node = 1;
                {
                    var error = $root.Trace.QueryPlanNode.SequenceNode.verify(message.sequence);
                    if (error)
                        return "sequence." + error;
                }
            }
            if (message.parallel != null && message.hasOwnProperty("parallel")) {
                if (properties.node === 1)
                    return "node: multiple values";
                properties.node = 1;
                {
                    var error = $root.Trace.QueryPlanNode.ParallelNode.verify(message.parallel);
                    if (error)
                        return "parallel." + error;
                }
            }
            if (message.fetch != null && message.hasOwnProperty("fetch")) {
                if (properties.node === 1)
                    return "node: multiple values";
                properties.node = 1;
                {
                    var error = $root.Trace.QueryPlanNode.FetchNode.verify(message.fetch);
                    if (error)
                        return "fetch." + error;
                }
            }
            if (message.flatten != null && message.hasOwnProperty("flatten")) {
                if (properties.node === 1)
                    return "node: multiple values";
                properties.node = 1;
                {
                    var error = $root.Trace.QueryPlanNode.FlattenNode.verify(message.flatten);
                    if (error)
                        return "flatten." + error;
                }
            }
            return null;
        };

        /**
         * Creates a QueryPlanNode message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Trace.QueryPlanNode
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Trace.QueryPlanNode} QueryPlanNode
         */
        QueryPlanNode.fromObject = function fromObject(object) {
            if (object instanceof $root.Trace.QueryPlanNode)
                return object;
            var message = new $root.Trace.QueryPlanNode();
            if (object.sequence != null) {
                if (typeof object.sequence !== "object")
                    throw TypeError(".Trace.QueryPlanNode.sequence: object expected");
                message.sequence = $root.Trace.QueryPlanNode.SequenceNode.fromObject(object.sequence);
            }
            if (object.parallel != null) {
                if (typeof object.parallel !== "object")
                    throw TypeError(".Trace.QueryPlanNode.parallel: object expected");
                message.parallel = $root.Trace.QueryPlanNode.ParallelNode.fromObject(object.parallel);
            }
            if (object.fetch != null) {
                if (typeof object.fetch !== "object")
                    throw TypeError(".Trace.QueryPlanNode.fetch: object expected");
                message.fetch = $root.Trace.QueryPlanNode.FetchNode.fromObject(object.fetch);
            }
            if (object.flatten != null) {
                if (typeof object.flatten !== "object")
                    throw TypeError(".Trace.QueryPlanNode.flatten: object expected");
                message.flatten = $root.Trace.QueryPlanNode.FlattenNode.fromObject(object.flatten);
            }
            return message;
        };

        /**
         * Creates a plain object from a QueryPlanNode message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Trace.QueryPlanNode
         * @static
         * @param {Trace.QueryPlanNode} message QueryPlanNode
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        QueryPlanNode.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.sequence != null && message.hasOwnProperty("sequence")) {
                object.sequence = $root.Trace.QueryPlanNode.SequenceNode.toObject(message.sequence, options);
                if (options.oneofs)
                    object.node = "sequence";
            }
            if (message.parallel != null && message.hasOwnProperty("parallel")) {
                object.parallel = $root.Trace.QueryPlanNode.ParallelNode.toObject(message.parallel, options);
                if (options.oneofs)
                    object.node = "parallel";
            }
            if (message.fetch != null && message.hasOwnProperty("fetch")) {
                object.fetch = $root.Trace.QueryPlanNode.FetchNode.toObject(message.fetch, options);
                if (options.oneofs)
                    object.node = "fetch";
            }
            if (message.flatten != null && message.hasOwnProperty("flatten")) {
                object.flatten = $root.Trace.QueryPlanNode.FlattenNode.toObject(message.flatten, options);
                if (options.oneofs)
                    object.node = "flatten";
            }
            return object;
        };

        /**
         * Converts this QueryPlanNode to JSON.
         * @function toJSON
         * @memberof Trace.QueryPlanNode
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        QueryPlanNode.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        QueryPlanNode.SequenceNode = (function() {

            /**
             * Properties of a SequenceNode.
             * @memberof Trace.QueryPlanNode
             * @interface ISequenceNode
             * @property {Array.<Trace.IQueryPlanNode>|null} [nodes] SequenceNode nodes
             */

            /**
             * Constructs a new SequenceNode.
             * @memberof Trace.QueryPlanNode
             * @classdesc Represents a SequenceNode.
             * @implements ISequenceNode
             * @constructor
             * @param {Trace.QueryPlanNode.ISequenceNode=} [properties] Properties to set
             */
            function SequenceNode(properties) {
                this.nodes = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SequenceNode nodes.
             * @member {Array.<Trace.IQueryPlanNode>} nodes
             * @memberof Trace.QueryPlanNode.SequenceNode
             * @instance
             */
            SequenceNode.prototype.nodes = $util.emptyArray;

            /**
             * Creates a new SequenceNode instance using the specified properties.
             * @function create
             * @memberof Trace.QueryPlanNode.SequenceNode
             * @static
             * @param {Trace.QueryPlanNode.ISequenceNode=} [properties] Properties to set
             * @returns {Trace.QueryPlanNode.SequenceNode} SequenceNode instance
             */
            SequenceNode.create = function create(properties) {
                return new SequenceNode(properties);
            };

            /**
             * Encodes the specified SequenceNode message. Does not implicitly {@link Trace.QueryPlanNode.SequenceNode.verify|verify} messages.
             * @function encode
             * @memberof Trace.QueryPlanNode.SequenceNode
             * @static
             * @param {Trace.QueryPlanNode.ISequenceNode} message SequenceNode message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SequenceNode.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.nodes != null && message.nodes.length)
                    for (var i = 0; i < message.nodes.length; ++i)
                        $root.Trace.QueryPlanNode.encode(message.nodes[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified SequenceNode message, length delimited. Does not implicitly {@link Trace.QueryPlanNode.SequenceNode.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Trace.QueryPlanNode.SequenceNode
             * @static
             * @param {Trace.QueryPlanNode.ISequenceNode} message SequenceNode message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SequenceNode.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SequenceNode message from the specified reader or buffer.
             * @function decode
             * @memberof Trace.QueryPlanNode.SequenceNode
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Trace.QueryPlanNode.SequenceNode} SequenceNode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SequenceNode.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Trace.QueryPlanNode.SequenceNode();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.nodes && message.nodes.length))
                            message.nodes = [];
                        message.nodes.push($root.Trace.QueryPlanNode.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SequenceNode message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Trace.QueryPlanNode.SequenceNode
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Trace.QueryPlanNode.SequenceNode} SequenceNode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SequenceNode.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SequenceNode message.
             * @function verify
             * @memberof Trace.QueryPlanNode.SequenceNode
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SequenceNode.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.nodes != null && message.hasOwnProperty("nodes")) {
                    if (!Array.isArray(message.nodes))
                        return "nodes: array expected";
                    for (var i = 0; i < message.nodes.length; ++i) {
                        var error = $root.Trace.QueryPlanNode.verify(message.nodes[i]);
                        if (error)
                            return "nodes." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a SequenceNode message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Trace.QueryPlanNode.SequenceNode
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Trace.QueryPlanNode.SequenceNode} SequenceNode
             */
            SequenceNode.fromObject = function fromObject(object) {
                if (object instanceof $root.Trace.QueryPlanNode.SequenceNode)
                    return object;
                var message = new $root.Trace.QueryPlanNode.SequenceNode();
                if (object.nodes) {
                    if (!Array.isArray(object.nodes))
                        throw TypeError(".Trace.QueryPlanNode.SequenceNode.nodes: array expected");
                    message.nodes = [];
                    for (var i = 0; i < object.nodes.length; ++i) {
                        if (typeof object.nodes[i] !== "object")
                            throw TypeError(".Trace.QueryPlanNode.SequenceNode.nodes: object expected");
                        message.nodes[i] = $root.Trace.QueryPlanNode.fromObject(object.nodes[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a SequenceNode message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Trace.QueryPlanNode.SequenceNode
             * @static
             * @param {Trace.QueryPlanNode.SequenceNode} message SequenceNode
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SequenceNode.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.nodes = [];
                if (message.nodes && message.nodes.length) {
                    object.nodes = [];
                    for (var j = 0; j < message.nodes.length; ++j)
                        object.nodes[j] = $root.Trace.QueryPlanNode.toObject(message.nodes[j], options);
                }
                return object;
            };

            /**
             * Converts this SequenceNode to JSON.
             * @function toJSON
             * @memberof Trace.QueryPlanNode.SequenceNode
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SequenceNode.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return SequenceNode;
        })();

        QueryPlanNode.ParallelNode = (function() {

            /**
             * Properties of a ParallelNode.
             * @memberof Trace.QueryPlanNode
             * @interface IParallelNode
             * @property {Array.<Trace.IQueryPlanNode>|null} [nodes] ParallelNode nodes
             */

            /**
             * Constructs a new ParallelNode.
             * @memberof Trace.QueryPlanNode
             * @classdesc Represents a ParallelNode.
             * @implements IParallelNode
             * @constructor
             * @param {Trace.QueryPlanNode.IParallelNode=} [properties] Properties to set
             */
            function ParallelNode(properties) {
                this.nodes = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ParallelNode nodes.
             * @member {Array.<Trace.IQueryPlanNode>} nodes
             * @memberof Trace.QueryPlanNode.ParallelNode
             * @instance
             */
            ParallelNode.prototype.nodes = $util.emptyArray;

            /**
             * Creates a new ParallelNode instance using the specified properties.
             * @function create
             * @memberof Trace.QueryPlanNode.ParallelNode
             * @static
             * @param {Trace.QueryPlanNode.IParallelNode=} [properties] Properties to set
             * @returns {Trace.QueryPlanNode.ParallelNode} ParallelNode instance
             */
            ParallelNode.create = function create(properties) {
                return new ParallelNode(properties);
            };

            /**
             * Encodes the specified ParallelNode message. Does not implicitly {@link Trace.QueryPlanNode.ParallelNode.verify|verify} messages.
             * @function encode
             * @memberof Trace.QueryPlanNode.ParallelNode
             * @static
             * @param {Trace.QueryPlanNode.IParallelNode} message ParallelNode message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ParallelNode.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.nodes != null && message.nodes.length)
                    for (var i = 0; i < message.nodes.length; ++i)
                        $root.Trace.QueryPlanNode.encode(message.nodes[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ParallelNode message, length delimited. Does not implicitly {@link Trace.QueryPlanNode.ParallelNode.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Trace.QueryPlanNode.ParallelNode
             * @static
             * @param {Trace.QueryPlanNode.IParallelNode} message ParallelNode message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ParallelNode.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ParallelNode message from the specified reader or buffer.
             * @function decode
             * @memberof Trace.QueryPlanNode.ParallelNode
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Trace.QueryPlanNode.ParallelNode} ParallelNode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ParallelNode.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Trace.QueryPlanNode.ParallelNode();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.nodes && message.nodes.length))
                            message.nodes = [];
                        message.nodes.push($root.Trace.QueryPlanNode.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ParallelNode message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Trace.QueryPlanNode.ParallelNode
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Trace.QueryPlanNode.ParallelNode} ParallelNode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ParallelNode.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ParallelNode message.
             * @function verify
             * @memberof Trace.QueryPlanNode.ParallelNode
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ParallelNode.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.nodes != null && message.hasOwnProperty("nodes")) {
                    if (!Array.isArray(message.nodes))
                        return "nodes: array expected";
                    for (var i = 0; i < message.nodes.length; ++i) {
                        var error = $root.Trace.QueryPlanNode.verify(message.nodes[i]);
                        if (error)
                            return "nodes." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a ParallelNode message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Trace.QueryPlanNode.ParallelNode
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Trace.QueryPlanNode.ParallelNode} ParallelNode
             */
            ParallelNode.fromObject = function fromObject(object) {
                if (object instanceof $root.Trace.QueryPlanNode.ParallelNode)
                    return object;
                var message = new $root.Trace.QueryPlanNode.ParallelNode();
                if (object.nodes) {
                    if (!Array.isArray(object.nodes))
                        throw TypeError(".Trace.QueryPlanNode.ParallelNode.nodes: array expected");
                    message.nodes = [];
                    for (var i = 0; i < object.nodes.length; ++i) {
                        if (typeof object.nodes[i] !== "object")
                            throw TypeError(".Trace.QueryPlanNode.ParallelNode.nodes: object expected");
                        message.nodes[i] = $root.Trace.QueryPlanNode.fromObject(object.nodes[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a ParallelNode message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Trace.QueryPlanNode.ParallelNode
             * @static
             * @param {Trace.QueryPlanNode.ParallelNode} message ParallelNode
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ParallelNode.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.nodes = [];
                if (message.nodes && message.nodes.length) {
                    object.nodes = [];
                    for (var j = 0; j < message.nodes.length; ++j)
                        object.nodes[j] = $root.Trace.QueryPlanNode.toObject(message.nodes[j], options);
                }
                return object;
            };

            /**
             * Converts this ParallelNode to JSON.
             * @function toJSON
             * @memberof Trace.QueryPlanNode.ParallelNode
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ParallelNode.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ParallelNode;
        })();

        QueryPlanNode.FetchNode = (function() {

            /**
             * Properties of a FetchNode.
             * @memberof Trace.QueryPlanNode
             * @interface IFetchNode
             * @property {string|null} [serviceName] FetchNode serviceName
             * @property {boolean|null} [traceParsingFailed] FetchNode traceParsingFailed
             * @property {ITrace|null} [trace] FetchNode trace
             * @property {number|null} [sentTimeOffset] FetchNode sentTimeOffset
             * @property {google.protobuf.ITimestamp|null} [sentTime] FetchNode sentTime
             * @property {google.protobuf.ITimestamp|null} [receivedTime] FetchNode receivedTime
             */

            /**
             * Constructs a new FetchNode.
             * @memberof Trace.QueryPlanNode
             * @classdesc Represents a FetchNode.
             * @implements IFetchNode
             * @constructor
             * @param {Trace.QueryPlanNode.IFetchNode=} [properties] Properties to set
             */
            function FetchNode(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FetchNode serviceName.
             * @member {string} serviceName
             * @memberof Trace.QueryPlanNode.FetchNode
             * @instance
             */
            FetchNode.prototype.serviceName = "";

            /**
             * FetchNode traceParsingFailed.
             * @member {boolean} traceParsingFailed
             * @memberof Trace.QueryPlanNode.FetchNode
             * @instance
             */
            FetchNode.prototype.traceParsingFailed = false;

            /**
             * FetchNode trace.
             * @member {ITrace|null|undefined} trace
             * @memberof Trace.QueryPlanNode.FetchNode
             * @instance
             */
            FetchNode.prototype.trace = null;

            /**
             * FetchNode sentTimeOffset.
             * @member {number} sentTimeOffset
             * @memberof Trace.QueryPlanNode.FetchNode
             * @instance
             */
            FetchNode.prototype.sentTimeOffset = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * FetchNode sentTime.
             * @member {google.protobuf.ITimestamp|null|undefined} sentTime
             * @memberof Trace.QueryPlanNode.FetchNode
             * @instance
             */
            FetchNode.prototype.sentTime = null;

            /**
             * FetchNode receivedTime.
             * @member {google.protobuf.ITimestamp|null|undefined} receivedTime
             * @memberof Trace.QueryPlanNode.FetchNode
             * @instance
             */
            FetchNode.prototype.receivedTime = null;

            /**
             * Creates a new FetchNode instance using the specified properties.
             * @function create
             * @memberof Trace.QueryPlanNode.FetchNode
             * @static
             * @param {Trace.QueryPlanNode.IFetchNode=} [properties] Properties to set
             * @returns {Trace.QueryPlanNode.FetchNode} FetchNode instance
             */
            FetchNode.create = function create(properties) {
                return new FetchNode(properties);
            };

            /**
             * Encodes the specified FetchNode message. Does not implicitly {@link Trace.QueryPlanNode.FetchNode.verify|verify} messages.
             * @function encode
             * @memberof Trace.QueryPlanNode.FetchNode
             * @static
             * @param {Trace.QueryPlanNode.IFetchNode} message FetchNode message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FetchNode.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.serviceName != null && Object.hasOwnProperty.call(message, "serviceName"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.serviceName);
                if (message.traceParsingFailed != null && Object.hasOwnProperty.call(message, "traceParsingFailed"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.traceParsingFailed);
                if (message.trace != null && Object.hasOwnProperty.call(message, "trace"))
                    $root.Trace.encode(message.trace, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.sentTimeOffset != null && Object.hasOwnProperty.call(message, "sentTimeOffset"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.sentTimeOffset);
                if (message.sentTime != null && Object.hasOwnProperty.call(message, "sentTime"))
                    $root.google.protobuf.Timestamp.encode(message.sentTime, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.receivedTime != null && Object.hasOwnProperty.call(message, "receivedTime"))
                    $root.google.protobuf.Timestamp.encode(message.receivedTime, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified FetchNode message, length delimited. Does not implicitly {@link Trace.QueryPlanNode.FetchNode.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Trace.QueryPlanNode.FetchNode
             * @static
             * @param {Trace.QueryPlanNode.IFetchNode} message FetchNode message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FetchNode.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FetchNode message from the specified reader or buffer.
             * @function decode
             * @memberof Trace.QueryPlanNode.FetchNode
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Trace.QueryPlanNode.FetchNode} FetchNode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FetchNode.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Trace.QueryPlanNode.FetchNode();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.serviceName = reader.string();
                        break;
                    case 2:
                        message.traceParsingFailed = reader.bool();
                        break;
                    case 3:
                        message.trace = $root.Trace.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.sentTimeOffset = reader.uint64();
                        break;
                    case 5:
                        message.sentTime = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    case 6:
                        message.receivedTime = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FetchNode message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Trace.QueryPlanNode.FetchNode
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Trace.QueryPlanNode.FetchNode} FetchNode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FetchNode.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FetchNode message.
             * @function verify
             * @memberof Trace.QueryPlanNode.FetchNode
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FetchNode.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.serviceName != null && message.hasOwnProperty("serviceName"))
                    if (!$util.isString(message.serviceName))
                        return "serviceName: string expected";
                if (message.traceParsingFailed != null && message.hasOwnProperty("traceParsingFailed"))
                    if (typeof message.traceParsingFailed !== "boolean")
                        return "traceParsingFailed: boolean expected";
                if (message.trace != null && message.hasOwnProperty("trace")) {
                    var error = $root.Trace.verify(message.trace);
                    if (error)
                        return "trace." + error;
                }
                if (message.sentTimeOffset != null && message.hasOwnProperty("sentTimeOffset"))
                    if (!$util.isInteger(message.sentTimeOffset) && !(message.sentTimeOffset && $util.isInteger(message.sentTimeOffset.low) && $util.isInteger(message.sentTimeOffset.high)))
                        return "sentTimeOffset: integer|Long expected";
                if (message.sentTime != null && message.hasOwnProperty("sentTime")) {
                    var error = $root.google.protobuf.Timestamp.verify(message.sentTime);
                    if (error)
                        return "sentTime." + error;
                }
                if (message.receivedTime != null && message.hasOwnProperty("receivedTime")) {
                    var error = $root.google.protobuf.Timestamp.verify(message.receivedTime);
                    if (error)
                        return "receivedTime." + error;
                }
                return null;
            };

            /**
             * Creates a FetchNode message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Trace.QueryPlanNode.FetchNode
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Trace.QueryPlanNode.FetchNode} FetchNode
             */
            FetchNode.fromObject = function fromObject(object) {
                if (object instanceof $root.Trace.QueryPlanNode.FetchNode)
                    return object;
                var message = new $root.Trace.QueryPlanNode.FetchNode();
                if (object.serviceName != null)
                    message.serviceName = String(object.serviceName);
                if (object.traceParsingFailed != null)
                    message.traceParsingFailed = Boolean(object.traceParsingFailed);
                if (object.trace != null) {
                    if (typeof object.trace !== "object")
                        throw TypeError(".Trace.QueryPlanNode.FetchNode.trace: object expected");
                    message.trace = $root.Trace.fromObject(object.trace);
                }
                if (object.sentTimeOffset != null)
                    if ($util.Long)
                        (message.sentTimeOffset = $util.Long.fromValue(object.sentTimeOffset)).unsigned = true;
                    else if (typeof object.sentTimeOffset === "string")
                        message.sentTimeOffset = parseInt(object.sentTimeOffset, 10);
                    else if (typeof object.sentTimeOffset === "number")
                        message.sentTimeOffset = object.sentTimeOffset;
                    else if (typeof object.sentTimeOffset === "object")
                        message.sentTimeOffset = new $util.LongBits(object.sentTimeOffset.low >>> 0, object.sentTimeOffset.high >>> 0).toNumber(true);
                if (object.sentTime != null) {
                    if (typeof object.sentTime !== "object")
                        throw TypeError(".Trace.QueryPlanNode.FetchNode.sentTime: object expected");
                    message.sentTime = $root.google.protobuf.Timestamp.fromObject(object.sentTime);
                }
                if (object.receivedTime != null) {
                    if (typeof object.receivedTime !== "object")
                        throw TypeError(".Trace.QueryPlanNode.FetchNode.receivedTime: object expected");
                    message.receivedTime = $root.google.protobuf.Timestamp.fromObject(object.receivedTime);
                }
                return message;
            };

            /**
             * Creates a plain object from a FetchNode message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Trace.QueryPlanNode.FetchNode
             * @static
             * @param {Trace.QueryPlanNode.FetchNode} message FetchNode
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FetchNode.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.serviceName = "";
                    object.traceParsingFailed = false;
                    object.trace = null;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.sentTimeOffset = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.sentTimeOffset = options.longs === String ? "0" : 0;
                    object.sentTime = null;
                    object.receivedTime = null;
                }
                if (message.serviceName != null && message.hasOwnProperty("serviceName"))
                    object.serviceName = message.serviceName;
                if (message.traceParsingFailed != null && message.hasOwnProperty("traceParsingFailed"))
                    object.traceParsingFailed = message.traceParsingFailed;
                if (message.trace != null && message.hasOwnProperty("trace"))
                    object.trace = $root.Trace.toObject(message.trace, options);
                if (message.sentTimeOffset != null && message.hasOwnProperty("sentTimeOffset"))
                    if (typeof message.sentTimeOffset === "number")
                        object.sentTimeOffset = options.longs === String ? String(message.sentTimeOffset) : message.sentTimeOffset;
                    else
                        object.sentTimeOffset = options.longs === String ? $util.Long.prototype.toString.call(message.sentTimeOffset) : options.longs === Number ? new $util.LongBits(message.sentTimeOffset.low >>> 0, message.sentTimeOffset.high >>> 0).toNumber(true) : message.sentTimeOffset;
                if (message.sentTime != null && message.hasOwnProperty("sentTime"))
                    object.sentTime = $root.google.protobuf.Timestamp.toObject(message.sentTime, options);
                if (message.receivedTime != null && message.hasOwnProperty("receivedTime"))
                    object.receivedTime = $root.google.protobuf.Timestamp.toObject(message.receivedTime, options);
                return object;
            };

            /**
             * Converts this FetchNode to JSON.
             * @function toJSON
             * @memberof Trace.QueryPlanNode.FetchNode
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FetchNode.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return FetchNode;
        })();

        QueryPlanNode.FlattenNode = (function() {

            /**
             * Properties of a FlattenNode.
             * @memberof Trace.QueryPlanNode
             * @interface IFlattenNode
             * @property {Array.<Trace.QueryPlanNode.IResponsePathElement>|null} [responsePath] FlattenNode responsePath
             * @property {Trace.IQueryPlanNode|null} [node] FlattenNode node
             */

            /**
             * Constructs a new FlattenNode.
             * @memberof Trace.QueryPlanNode
             * @classdesc Represents a FlattenNode.
             * @implements IFlattenNode
             * @constructor
             * @param {Trace.QueryPlanNode.IFlattenNode=} [properties] Properties to set
             */
            function FlattenNode(properties) {
                this.responsePath = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FlattenNode responsePath.
             * @member {Array.<Trace.QueryPlanNode.IResponsePathElement>} responsePath
             * @memberof Trace.QueryPlanNode.FlattenNode
             * @instance
             */
            FlattenNode.prototype.responsePath = $util.emptyArray;

            /**
             * FlattenNode node.
             * @member {Trace.IQueryPlanNode|null|undefined} node
             * @memberof Trace.QueryPlanNode.FlattenNode
             * @instance
             */
            FlattenNode.prototype.node = null;

            /**
             * Creates a new FlattenNode instance using the specified properties.
             * @function create
             * @memberof Trace.QueryPlanNode.FlattenNode
             * @static
             * @param {Trace.QueryPlanNode.IFlattenNode=} [properties] Properties to set
             * @returns {Trace.QueryPlanNode.FlattenNode} FlattenNode instance
             */
            FlattenNode.create = function create(properties) {
                return new FlattenNode(properties);
            };

            /**
             * Encodes the specified FlattenNode message. Does not implicitly {@link Trace.QueryPlanNode.FlattenNode.verify|verify} messages.
             * @function encode
             * @memberof Trace.QueryPlanNode.FlattenNode
             * @static
             * @param {Trace.QueryPlanNode.IFlattenNode} message FlattenNode message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FlattenNode.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.responsePath != null && message.responsePath.length)
                    for (var i = 0; i < message.responsePath.length; ++i)
                        $root.Trace.QueryPlanNode.ResponsePathElement.encode(message.responsePath[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.node != null && Object.hasOwnProperty.call(message, "node"))
                    $root.Trace.QueryPlanNode.encode(message.node, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified FlattenNode message, length delimited. Does not implicitly {@link Trace.QueryPlanNode.FlattenNode.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Trace.QueryPlanNode.FlattenNode
             * @static
             * @param {Trace.QueryPlanNode.IFlattenNode} message FlattenNode message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FlattenNode.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FlattenNode message from the specified reader or buffer.
             * @function decode
             * @memberof Trace.QueryPlanNode.FlattenNode
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Trace.QueryPlanNode.FlattenNode} FlattenNode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FlattenNode.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Trace.QueryPlanNode.FlattenNode();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.responsePath && message.responsePath.length))
                            message.responsePath = [];
                        message.responsePath.push($root.Trace.QueryPlanNode.ResponsePathElement.decode(reader, reader.uint32()));
                        break;
                    case 2:
                        message.node = $root.Trace.QueryPlanNode.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FlattenNode message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Trace.QueryPlanNode.FlattenNode
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Trace.QueryPlanNode.FlattenNode} FlattenNode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FlattenNode.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FlattenNode message.
             * @function verify
             * @memberof Trace.QueryPlanNode.FlattenNode
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FlattenNode.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.responsePath != null && message.hasOwnProperty("responsePath")) {
                    if (!Array.isArray(message.responsePath))
                        return "responsePath: array expected";
                    for (var i = 0; i < message.responsePath.length; ++i) {
                        var error = $root.Trace.QueryPlanNode.ResponsePathElement.verify(message.responsePath[i]);
                        if (error)
                            return "responsePath." + error;
                    }
                }
                if (message.node != null && message.hasOwnProperty("node")) {
                    var error = $root.Trace.QueryPlanNode.verify(message.node);
                    if (error)
                        return "node." + error;
                }
                return null;
            };

            /**
             * Creates a FlattenNode message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Trace.QueryPlanNode.FlattenNode
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Trace.QueryPlanNode.FlattenNode} FlattenNode
             */
            FlattenNode.fromObject = function fromObject(object) {
                if (object instanceof $root.Trace.QueryPlanNode.FlattenNode)
                    return object;
                var message = new $root.Trace.QueryPlanNode.FlattenNode();
                if (object.responsePath) {
                    if (!Array.isArray(object.responsePath))
                        throw TypeError(".Trace.QueryPlanNode.FlattenNode.responsePath: array expected");
                    message.responsePath = [];
                    for (var i = 0; i < object.responsePath.length; ++i) {
                        if (typeof object.responsePath[i] !== "object")
                            throw TypeError(".Trace.QueryPlanNode.FlattenNode.responsePath: object expected");
                        message.responsePath[i] = $root.Trace.QueryPlanNode.ResponsePathElement.fromObject(object.responsePath[i]);
                    }
                }
                if (object.node != null) {
                    if (typeof object.node !== "object")
                        throw TypeError(".Trace.QueryPlanNode.FlattenNode.node: object expected");
                    message.node = $root.Trace.QueryPlanNode.fromObject(object.node);
                }
                return message;
            };

            /**
             * Creates a plain object from a FlattenNode message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Trace.QueryPlanNode.FlattenNode
             * @static
             * @param {Trace.QueryPlanNode.FlattenNode} message FlattenNode
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FlattenNode.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.responsePath = [];
                if (options.defaults)
                    object.node = null;
                if (message.responsePath && message.responsePath.length) {
                    object.responsePath = [];
                    for (var j = 0; j < message.responsePath.length; ++j)
                        object.responsePath[j] = $root.Trace.QueryPlanNode.ResponsePathElement.toObject(message.responsePath[j], options);
                }
                if (message.node != null && message.hasOwnProperty("node"))
                    object.node = $root.Trace.QueryPlanNode.toObject(message.node, options);
                return object;
            };

            /**
             * Converts this FlattenNode to JSON.
             * @function toJSON
             * @memberof Trace.QueryPlanNode.FlattenNode
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FlattenNode.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return FlattenNode;
        })();

        QueryPlanNode.ResponsePathElement = (function() {

            /**
             * Properties of a ResponsePathElement.
             * @memberof Trace.QueryPlanNode
             * @interface IResponsePathElement
             * @property {string|null} [fieldName] ResponsePathElement fieldName
             * @property {number|null} [index] ResponsePathElement index
             */

            /**
             * Constructs a new ResponsePathElement.
             * @memberof Trace.QueryPlanNode
             * @classdesc Represents a ResponsePathElement.
             * @implements IResponsePathElement
             * @constructor
             * @param {Trace.QueryPlanNode.IResponsePathElement=} [properties] Properties to set
             */
            function ResponsePathElement(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ResponsePathElement fieldName.
             * @member {string} fieldName
             * @memberof Trace.QueryPlanNode.ResponsePathElement
             * @instance
             */
            ResponsePathElement.prototype.fieldName = "";

            /**
             * ResponsePathElement index.
             * @member {number} index
             * @memberof Trace.QueryPlanNode.ResponsePathElement
             * @instance
             */
            ResponsePathElement.prototype.index = 0;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            /**
             * ResponsePathElement id.
             * @member {"fieldName"|"index"|undefined} id
             * @memberof Trace.QueryPlanNode.ResponsePathElement
             * @instance
             */
            Object.defineProperty(ResponsePathElement.prototype, "id", {
                get: $util.oneOfGetter($oneOfFields = ["fieldName", "index"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new ResponsePathElement instance using the specified properties.
             * @function create
             * @memberof Trace.QueryPlanNode.ResponsePathElement
             * @static
             * @param {Trace.QueryPlanNode.IResponsePathElement=} [properties] Properties to set
             * @returns {Trace.QueryPlanNode.ResponsePathElement} ResponsePathElement instance
             */
            ResponsePathElement.create = function create(properties) {
                return new ResponsePathElement(properties);
            };

            /**
             * Encodes the specified ResponsePathElement message. Does not implicitly {@link Trace.QueryPlanNode.ResponsePathElement.verify|verify} messages.
             * @function encode
             * @memberof Trace.QueryPlanNode.ResponsePathElement
             * @static
             * @param {Trace.QueryPlanNode.IResponsePathElement} message ResponsePathElement message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponsePathElement.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.fieldName != null && Object.hasOwnProperty.call(message, "fieldName"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.fieldName);
                if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.index);
                return writer;
            };

            /**
             * Encodes the specified ResponsePathElement message, length delimited. Does not implicitly {@link Trace.QueryPlanNode.ResponsePathElement.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Trace.QueryPlanNode.ResponsePathElement
             * @static
             * @param {Trace.QueryPlanNode.IResponsePathElement} message ResponsePathElement message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponsePathElement.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ResponsePathElement message from the specified reader or buffer.
             * @function decode
             * @memberof Trace.QueryPlanNode.ResponsePathElement
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Trace.QueryPlanNode.ResponsePathElement} ResponsePathElement
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponsePathElement.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Trace.QueryPlanNode.ResponsePathElement();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.fieldName = reader.string();
                        break;
                    case 2:
                        message.index = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ResponsePathElement message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Trace.QueryPlanNode.ResponsePathElement
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Trace.QueryPlanNode.ResponsePathElement} ResponsePathElement
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponsePathElement.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ResponsePathElement message.
             * @function verify
             * @memberof Trace.QueryPlanNode.ResponsePathElement
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResponsePathElement.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.fieldName != null && message.hasOwnProperty("fieldName")) {
                    properties.id = 1;
                    if (!$util.isString(message.fieldName))
                        return "fieldName: string expected";
                }
                if (message.index != null && message.hasOwnProperty("index")) {
                    if (properties.id === 1)
                        return "id: multiple values";
                    properties.id = 1;
                    if (!$util.isInteger(message.index))
                        return "index: integer expected";
                }
                return null;
            };

            /**
             * Creates a ResponsePathElement message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Trace.QueryPlanNode.ResponsePathElement
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Trace.QueryPlanNode.ResponsePathElement} ResponsePathElement
             */
            ResponsePathElement.fromObject = function fromObject(object) {
                if (object instanceof $root.Trace.QueryPlanNode.ResponsePathElement)
                    return object;
                var message = new $root.Trace.QueryPlanNode.ResponsePathElement();
                if (object.fieldName != null)
                    message.fieldName = String(object.fieldName);
                if (object.index != null)
                    message.index = object.index >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a ResponsePathElement message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Trace.QueryPlanNode.ResponsePathElement
             * @static
             * @param {Trace.QueryPlanNode.ResponsePathElement} message ResponsePathElement
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResponsePathElement.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.fieldName != null && message.hasOwnProperty("fieldName")) {
                    object.fieldName = message.fieldName;
                    if (options.oneofs)
                        object.id = "fieldName";
                }
                if (message.index != null && message.hasOwnProperty("index")) {
                    object.index = message.index;
                    if (options.oneofs)
                        object.id = "index";
                }
                return object;
            };

            /**
             * Converts this ResponsePathElement to JSON.
             * @function toJSON
             * @memberof Trace.QueryPlanNode.ResponsePathElement
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResponsePathElement.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ResponsePathElement;
        })();

        return QueryPlanNode;
    })();

    return Trace;
})();

$root.ReportHeader = (function() {

    /**
     * Properties of a ReportHeader.
     * @exports IReportHeader
     * @interface IReportHeader
     * @property {string|null} [service] ReportHeader service
     * @property {string|null} [hostname] ReportHeader hostname
     * @property {string|null} [agentVersion] ReportHeader agentVersion
     * @property {string|null} [serviceVersion] ReportHeader serviceVersion
     * @property {string|null} [runtimeVersion] ReportHeader runtimeVersion
     * @property {string|null} [uname] ReportHeader uname
     * @property {string|null} [schemaTag] ReportHeader schemaTag
     * @property {string|null} [schemaHash] ReportHeader schemaHash
     */

    /**
     * Constructs a new ReportHeader.
     * @exports ReportHeader
     * @classdesc Represents a ReportHeader.
     * @implements IReportHeader
     * @constructor
     * @param {IReportHeader=} [properties] Properties to set
     */
    function ReportHeader(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReportHeader service.
     * @member {string} service
     * @memberof ReportHeader
     * @instance
     */
    ReportHeader.prototype.service = "";

    /**
     * ReportHeader hostname.
     * @member {string} hostname
     * @memberof ReportHeader
     * @instance
     */
    ReportHeader.prototype.hostname = "";

    /**
     * ReportHeader agentVersion.
     * @member {string} agentVersion
     * @memberof ReportHeader
     * @instance
     */
    ReportHeader.prototype.agentVersion = "";

    /**
     * ReportHeader serviceVersion.
     * @member {string} serviceVersion
     * @memberof ReportHeader
     * @instance
     */
    ReportHeader.prototype.serviceVersion = "";

    /**
     * ReportHeader runtimeVersion.
     * @member {string} runtimeVersion
     * @memberof ReportHeader
     * @instance
     */
    ReportHeader.prototype.runtimeVersion = "";

    /**
     * ReportHeader uname.
     * @member {string} uname
     * @memberof ReportHeader
     * @instance
     */
    ReportHeader.prototype.uname = "";

    /**
     * ReportHeader schemaTag.
     * @member {string} schemaTag
     * @memberof ReportHeader
     * @instance
     */
    ReportHeader.prototype.schemaTag = "";

    /**
     * ReportHeader schemaHash.
     * @member {string} schemaHash
     * @memberof ReportHeader
     * @instance
     */
    ReportHeader.prototype.schemaHash = "";

    /**
     * Creates a new ReportHeader instance using the specified properties.
     * @function create
     * @memberof ReportHeader
     * @static
     * @param {IReportHeader=} [properties] Properties to set
     * @returns {ReportHeader} ReportHeader instance
     */
    ReportHeader.create = function create(properties) {
        return new ReportHeader(properties);
    };

    /**
     * Encodes the specified ReportHeader message. Does not implicitly {@link ReportHeader.verify|verify} messages.
     * @function encode
     * @memberof ReportHeader
     * @static
     * @param {IReportHeader} message ReportHeader message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReportHeader.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.service != null && Object.hasOwnProperty.call(message, "service"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.service);
        if (message.hostname != null && Object.hasOwnProperty.call(message, "hostname"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.hostname);
        if (message.agentVersion != null && Object.hasOwnProperty.call(message, "agentVersion"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.agentVersion);
        if (message.serviceVersion != null && Object.hasOwnProperty.call(message, "serviceVersion"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.serviceVersion);
        if (message.runtimeVersion != null && Object.hasOwnProperty.call(message, "runtimeVersion"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.runtimeVersion);
        if (message.uname != null && Object.hasOwnProperty.call(message, "uname"))
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.uname);
        if (message.schemaTag != null && Object.hasOwnProperty.call(message, "schemaTag"))
            writer.uint32(/* id 10, wireType 2 =*/82).string(message.schemaTag);
        if (message.schemaHash != null && Object.hasOwnProperty.call(message, "schemaHash"))
            writer.uint32(/* id 11, wireType 2 =*/90).string(message.schemaHash);
        return writer;
    };

    /**
     * Encodes the specified ReportHeader message, length delimited. Does not implicitly {@link ReportHeader.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReportHeader
     * @static
     * @param {IReportHeader} message ReportHeader message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReportHeader.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReportHeader message from the specified reader or buffer.
     * @function decode
     * @memberof ReportHeader
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReportHeader} ReportHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReportHeader.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReportHeader();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 3:
                message.service = reader.string();
                break;
            case 5:
                message.hostname = reader.string();
                break;
            case 6:
                message.agentVersion = reader.string();
                break;
            case 7:
                message.serviceVersion = reader.string();
                break;
            case 8:
                message.runtimeVersion = reader.string();
                break;
            case 9:
                message.uname = reader.string();
                break;
            case 10:
                message.schemaTag = reader.string();
                break;
            case 11:
                message.schemaHash = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ReportHeader message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReportHeader
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReportHeader} ReportHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReportHeader.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReportHeader message.
     * @function verify
     * @memberof ReportHeader
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReportHeader.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.service != null && message.hasOwnProperty("service"))
            if (!$util.isString(message.service))
                return "service: string expected";
        if (message.hostname != null && message.hasOwnProperty("hostname"))
            if (!$util.isString(message.hostname))
                return "hostname: string expected";
        if (message.agentVersion != null && message.hasOwnProperty("agentVersion"))
            if (!$util.isString(message.agentVersion))
                return "agentVersion: string expected";
        if (message.serviceVersion != null && message.hasOwnProperty("serviceVersion"))
            if (!$util.isString(message.serviceVersion))
                return "serviceVersion: string expected";
        if (message.runtimeVersion != null && message.hasOwnProperty("runtimeVersion"))
            if (!$util.isString(message.runtimeVersion))
                return "runtimeVersion: string expected";
        if (message.uname != null && message.hasOwnProperty("uname"))
            if (!$util.isString(message.uname))
                return "uname: string expected";
        if (message.schemaTag != null && message.hasOwnProperty("schemaTag"))
            if (!$util.isString(message.schemaTag))
                return "schemaTag: string expected";
        if (message.schemaHash != null && message.hasOwnProperty("schemaHash"))
            if (!$util.isString(message.schemaHash))
                return "schemaHash: string expected";
        return null;
    };

    /**
     * Creates a ReportHeader message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReportHeader
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReportHeader} ReportHeader
     */
    ReportHeader.fromObject = function fromObject(object) {
        if (object instanceof $root.ReportHeader)
            return object;
        var message = new $root.ReportHeader();
        if (object.service != null)
            message.service = String(object.service);
        if (object.hostname != null)
            message.hostname = String(object.hostname);
        if (object.agentVersion != null)
            message.agentVersion = String(object.agentVersion);
        if (object.serviceVersion != null)
            message.serviceVersion = String(object.serviceVersion);
        if (object.runtimeVersion != null)
            message.runtimeVersion = String(object.runtimeVersion);
        if (object.uname != null)
            message.uname = String(object.uname);
        if (object.schemaTag != null)
            message.schemaTag = String(object.schemaTag);
        if (object.schemaHash != null)
            message.schemaHash = String(object.schemaHash);
        return message;
    };

    /**
     * Creates a plain object from a ReportHeader message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReportHeader
     * @static
     * @param {ReportHeader} message ReportHeader
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReportHeader.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.service = "";
            object.hostname = "";
            object.agentVersion = "";
            object.serviceVersion = "";
            object.runtimeVersion = "";
            object.uname = "";
            object.schemaTag = "";
            object.schemaHash = "";
        }
        if (message.service != null && message.hasOwnProperty("service"))
            object.service = message.service;
        if (message.hostname != null && message.hasOwnProperty("hostname"))
            object.hostname = message.hostname;
        if (message.agentVersion != null && message.hasOwnProperty("agentVersion"))
            object.agentVersion = message.agentVersion;
        if (message.serviceVersion != null && message.hasOwnProperty("serviceVersion"))
            object.serviceVersion = message.serviceVersion;
        if (message.runtimeVersion != null && message.hasOwnProperty("runtimeVersion"))
            object.runtimeVersion = message.runtimeVersion;
        if (message.uname != null && message.hasOwnProperty("uname"))
            object.uname = message.uname;
        if (message.schemaTag != null && message.hasOwnProperty("schemaTag"))
            object.schemaTag = message.schemaTag;
        if (message.schemaHash != null && message.hasOwnProperty("schemaHash"))
            object.schemaHash = message.schemaHash;
        return object;
    };

    /**
     * Converts this ReportHeader to JSON.
     * @function toJSON
     * @memberof ReportHeader
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReportHeader.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReportHeader;
})();

$root.PathErrorStats = (function() {

    /**
     * Properties of a PathErrorStats.
     * @exports IPathErrorStats
     * @interface IPathErrorStats
     * @property {Object.<string,IPathErrorStats>|null} [children] PathErrorStats children
     * @property {number|null} [errorsCount] PathErrorStats errorsCount
     * @property {number|null} [requestsWithErrorsCount] PathErrorStats requestsWithErrorsCount
     */

    /**
     * Constructs a new PathErrorStats.
     * @exports PathErrorStats
     * @classdesc Represents a PathErrorStats.
     * @implements IPathErrorStats
     * @constructor
     * @param {IPathErrorStats=} [properties] Properties to set
     */
    function PathErrorStats(properties) {
        this.children = {};
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PathErrorStats children.
     * @member {Object.<string,IPathErrorStats>} children
     * @memberof PathErrorStats
     * @instance
     */
    PathErrorStats.prototype.children = $util.emptyObject;

    /**
     * PathErrorStats errorsCount.
     * @member {number} errorsCount
     * @memberof PathErrorStats
     * @instance
     */
    PathErrorStats.prototype.errorsCount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * PathErrorStats requestsWithErrorsCount.
     * @member {number} requestsWithErrorsCount
     * @memberof PathErrorStats
     * @instance
     */
    PathErrorStats.prototype.requestsWithErrorsCount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new PathErrorStats instance using the specified properties.
     * @function create
     * @memberof PathErrorStats
     * @static
     * @param {IPathErrorStats=} [properties] Properties to set
     * @returns {PathErrorStats} PathErrorStats instance
     */
    PathErrorStats.create = function create(properties) {
        return new PathErrorStats(properties);
    };

    /**
     * Encodes the specified PathErrorStats message. Does not implicitly {@link PathErrorStats.verify|verify} messages.
     * @function encode
     * @memberof PathErrorStats
     * @static
     * @param {IPathErrorStats} message PathErrorStats message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PathErrorStats.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.children != null && Object.hasOwnProperty.call(message, "children"))
            for (var keys = Object.keys(message.children), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                $root.PathErrorStats.encode(message.children[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.errorsCount != null && Object.hasOwnProperty.call(message, "errorsCount"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.errorsCount);
        if (message.requestsWithErrorsCount != null && Object.hasOwnProperty.call(message, "requestsWithErrorsCount"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.requestsWithErrorsCount);
        return writer;
    };

    /**
     * Encodes the specified PathErrorStats message, length delimited. Does not implicitly {@link PathErrorStats.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PathErrorStats
     * @static
     * @param {IPathErrorStats} message PathErrorStats message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PathErrorStats.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PathErrorStats message from the specified reader or buffer.
     * @function decode
     * @memberof PathErrorStats
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PathErrorStats} PathErrorStats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PathErrorStats.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PathErrorStats(), key;
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                reader.skip().pos++;
                if (message.children === $util.emptyObject)
                    message.children = {};
                key = reader.string();
                reader.pos++;
                message.children[key] = $root.PathErrorStats.decode(reader, reader.uint32());
                break;
            case 4:
                message.errorsCount = reader.uint64();
                break;
            case 5:
                message.requestsWithErrorsCount = reader.uint64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PathErrorStats message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PathErrorStats
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PathErrorStats} PathErrorStats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PathErrorStats.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PathErrorStats message.
     * @function verify
     * @memberof PathErrorStats
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PathErrorStats.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.children != null && message.hasOwnProperty("children")) {
            if (!$util.isObject(message.children))
                return "children: object expected";
            var key = Object.keys(message.children);
            for (var i = 0; i < key.length; ++i) {
                var error = $root.PathErrorStats.verify(message.children[key[i]]);
                if (error)
                    return "children." + error;
            }
        }
        if (message.errorsCount != null && message.hasOwnProperty("errorsCount"))
            if (!$util.isInteger(message.errorsCount) && !(message.errorsCount && $util.isInteger(message.errorsCount.low) && $util.isInteger(message.errorsCount.high)))
                return "errorsCount: integer|Long expected";
        if (message.requestsWithErrorsCount != null && message.hasOwnProperty("requestsWithErrorsCount"))
            if (!$util.isInteger(message.requestsWithErrorsCount) && !(message.requestsWithErrorsCount && $util.isInteger(message.requestsWithErrorsCount.low) && $util.isInteger(message.requestsWithErrorsCount.high)))
                return "requestsWithErrorsCount: integer|Long expected";
        return null;
    };

    /**
     * Creates a PathErrorStats message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PathErrorStats
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PathErrorStats} PathErrorStats
     */
    PathErrorStats.fromObject = function fromObject(object) {
        if (object instanceof $root.PathErrorStats)
            return object;
        var message = new $root.PathErrorStats();
        if (object.children) {
            if (typeof object.children !== "object")
                throw TypeError(".PathErrorStats.children: object expected");
            message.children = {};
            for (var keys = Object.keys(object.children), i = 0; i < keys.length; ++i) {
                if (typeof object.children[keys[i]] !== "object")
                    throw TypeError(".PathErrorStats.children: object expected");
                message.children[keys[i]] = $root.PathErrorStats.fromObject(object.children[keys[i]]);
            }
        }
        if (object.errorsCount != null)
            if ($util.Long)
                (message.errorsCount = $util.Long.fromValue(object.errorsCount)).unsigned = true;
            else if (typeof object.errorsCount === "string")
                message.errorsCount = parseInt(object.errorsCount, 10);
            else if (typeof object.errorsCount === "number")
                message.errorsCount = object.errorsCount;
            else if (typeof object.errorsCount === "object")
                message.errorsCount = new $util.LongBits(object.errorsCount.low >>> 0, object.errorsCount.high >>> 0).toNumber(true);
        if (object.requestsWithErrorsCount != null)
            if ($util.Long)
                (message.requestsWithErrorsCount = $util.Long.fromValue(object.requestsWithErrorsCount)).unsigned = true;
            else if (typeof object.requestsWithErrorsCount === "string")
                message.requestsWithErrorsCount = parseInt(object.requestsWithErrorsCount, 10);
            else if (typeof object.requestsWithErrorsCount === "number")
                message.requestsWithErrorsCount = object.requestsWithErrorsCount;
            else if (typeof object.requestsWithErrorsCount === "object")
                message.requestsWithErrorsCount = new $util.LongBits(object.requestsWithErrorsCount.low >>> 0, object.requestsWithErrorsCount.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a PathErrorStats message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PathErrorStats
     * @static
     * @param {PathErrorStats} message PathErrorStats
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PathErrorStats.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.objects || options.defaults)
            object.children = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.errorsCount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.errorsCount = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.requestsWithErrorsCount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.requestsWithErrorsCount = options.longs === String ? "0" : 0;
        }
        var keys2;
        if (message.children && (keys2 = Object.keys(message.children)).length) {
            object.children = {};
            for (var j = 0; j < keys2.length; ++j)
                object.children[keys2[j]] = $root.PathErrorStats.toObject(message.children[keys2[j]], options);
        }
        if (message.errorsCount != null && message.hasOwnProperty("errorsCount"))
            if (typeof message.errorsCount === "number")
                object.errorsCount = options.longs === String ? String(message.errorsCount) : message.errorsCount;
            else
                object.errorsCount = options.longs === String ? $util.Long.prototype.toString.call(message.errorsCount) : options.longs === Number ? new $util.LongBits(message.errorsCount.low >>> 0, message.errorsCount.high >>> 0).toNumber(true) : message.errorsCount;
        if (message.requestsWithErrorsCount != null && message.hasOwnProperty("requestsWithErrorsCount"))
            if (typeof message.requestsWithErrorsCount === "number")
                object.requestsWithErrorsCount = options.longs === String ? String(message.requestsWithErrorsCount) : message.requestsWithErrorsCount;
            else
                object.requestsWithErrorsCount = options.longs === String ? $util.Long.prototype.toString.call(message.requestsWithErrorsCount) : options.longs === Number ? new $util.LongBits(message.requestsWithErrorsCount.low >>> 0, message.requestsWithErrorsCount.high >>> 0).toNumber(true) : message.requestsWithErrorsCount;
        return object;
    };

    /**
     * Converts this PathErrorStats to JSON.
     * @function toJSON
     * @memberof PathErrorStats
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PathErrorStats.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PathErrorStats;
})();

$root.ClientNameStats = (function() {

    /**
     * Properties of a ClientNameStats.
     * @exports IClientNameStats
     * @interface IClientNameStats
     * @property {Array.<number>|null} [latencyCount] ClientNameStats latencyCount
     * @property {Object.<string,number>|null} [requestsCountPerVersion] ClientNameStats requestsCountPerVersion
     * @property {Object.<string,number>|null} [cacheHitsPerVersion] ClientNameStats cacheHitsPerVersion
     * @property {Object.<string,number>|null} [persistedQueryHitsPerVersion] ClientNameStats persistedQueryHitsPerVersion
     * @property {Object.<string,number>|null} [persistedQueryMissesPerVersion] ClientNameStats persistedQueryMissesPerVersion
     * @property {Object.<string,number>|null} [registeredOperationCountPerVersion] ClientNameStats registeredOperationCountPerVersion
     * @property {Object.<string,number>|null} [forbiddenOperationCountPerVersion] ClientNameStats forbiddenOperationCountPerVersion
     * @property {Array.<number>|null} [cacheLatencyCount] ClientNameStats cacheLatencyCount
     * @property {IPathErrorStats|null} [rootErrorStats] ClientNameStats rootErrorStats
     * @property {number|null} [requestsWithErrorsCount] ClientNameStats requestsWithErrorsCount
     * @property {Array.<number>|null} [publicCacheTtlCount] ClientNameStats publicCacheTtlCount
     * @property {Array.<number>|null} [privateCacheTtlCount] ClientNameStats privateCacheTtlCount
     */

    /**
     * Constructs a new ClientNameStats.
     * @exports ClientNameStats
     * @classdesc Represents a ClientNameStats.
     * @implements IClientNameStats
     * @constructor
     * @param {IClientNameStats=} [properties] Properties to set
     */
    function ClientNameStats(properties) {
        this.latencyCount = [];
        this.requestsCountPerVersion = {};
        this.cacheHitsPerVersion = {};
        this.persistedQueryHitsPerVersion = {};
        this.persistedQueryMissesPerVersion = {};
        this.registeredOperationCountPerVersion = {};
        this.forbiddenOperationCountPerVersion = {};
        this.cacheLatencyCount = [];
        this.publicCacheTtlCount = [];
        this.privateCacheTtlCount = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ClientNameStats latencyCount.
     * @member {Array.<number>} latencyCount
     * @memberof ClientNameStats
     * @instance
     */
    ClientNameStats.prototype.latencyCount = $util.emptyArray;

    /**
     * ClientNameStats requestsCountPerVersion.
     * @member {Object.<string,number>} requestsCountPerVersion
     * @memberof ClientNameStats
     * @instance
     */
    ClientNameStats.prototype.requestsCountPerVersion = $util.emptyObject;

    /**
     * ClientNameStats cacheHitsPerVersion.
     * @member {Object.<string,number>} cacheHitsPerVersion
     * @memberof ClientNameStats
     * @instance
     */
    ClientNameStats.prototype.cacheHitsPerVersion = $util.emptyObject;

    /**
     * ClientNameStats persistedQueryHitsPerVersion.
     * @member {Object.<string,number>} persistedQueryHitsPerVersion
     * @memberof ClientNameStats
     * @instance
     */
    ClientNameStats.prototype.persistedQueryHitsPerVersion = $util.emptyObject;

    /**
     * ClientNameStats persistedQueryMissesPerVersion.
     * @member {Object.<string,number>} persistedQueryMissesPerVersion
     * @memberof ClientNameStats
     * @instance
     */
    ClientNameStats.prototype.persistedQueryMissesPerVersion = $util.emptyObject;

    /**
     * ClientNameStats registeredOperationCountPerVersion.
     * @member {Object.<string,number>} registeredOperationCountPerVersion
     * @memberof ClientNameStats
     * @instance
     */
    ClientNameStats.prototype.registeredOperationCountPerVersion = $util.emptyObject;

    /**
     * ClientNameStats forbiddenOperationCountPerVersion.
     * @member {Object.<string,number>} forbiddenOperationCountPerVersion
     * @memberof ClientNameStats
     * @instance
     */
    ClientNameStats.prototype.forbiddenOperationCountPerVersion = $util.emptyObject;

    /**
     * ClientNameStats cacheLatencyCount.
     * @member {Array.<number>} cacheLatencyCount
     * @memberof ClientNameStats
     * @instance
     */
    ClientNameStats.prototype.cacheLatencyCount = $util.emptyArray;

    /**
     * ClientNameStats rootErrorStats.
     * @member {IPathErrorStats|null|undefined} rootErrorStats
     * @memberof ClientNameStats
     * @instance
     */
    ClientNameStats.prototype.rootErrorStats = null;

    /**
     * ClientNameStats requestsWithErrorsCount.
     * @member {number} requestsWithErrorsCount
     * @memberof ClientNameStats
     * @instance
     */
    ClientNameStats.prototype.requestsWithErrorsCount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * ClientNameStats publicCacheTtlCount.
     * @member {Array.<number>} publicCacheTtlCount
     * @memberof ClientNameStats
     * @instance
     */
    ClientNameStats.prototype.publicCacheTtlCount = $util.emptyArray;

    /**
     * ClientNameStats privateCacheTtlCount.
     * @member {Array.<number>} privateCacheTtlCount
     * @memberof ClientNameStats
     * @instance
     */
    ClientNameStats.prototype.privateCacheTtlCount = $util.emptyArray;

    /**
     * Creates a new ClientNameStats instance using the specified properties.
     * @function create
     * @memberof ClientNameStats
     * @static
     * @param {IClientNameStats=} [properties] Properties to set
     * @returns {ClientNameStats} ClientNameStats instance
     */
    ClientNameStats.create = function create(properties) {
        return new ClientNameStats(properties);
    };

    /**
     * Encodes the specified ClientNameStats message. Does not implicitly {@link ClientNameStats.verify|verify} messages.
     * @function encode
     * @memberof ClientNameStats
     * @static
     * @param {IClientNameStats} message ClientNameStats message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClientNameStats.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.latencyCount != null && message.latencyCount.length) {
            writer.uint32(/* id 1, wireType 2 =*/10).fork();
            for (var i = 0; i < message.latencyCount.length; ++i)
                writer.int64(message.latencyCount[i]);
            writer.ldelim();
        }
        if (message.requestsCountPerVersion != null && Object.hasOwnProperty.call(message, "requestsCountPerVersion"))
            for (var keys = Object.keys(message.requestsCountPerVersion), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).uint64(message.requestsCountPerVersion[keys[i]]).ldelim();
        if (message.cacheHitsPerVersion != null && Object.hasOwnProperty.call(message, "cacheHitsPerVersion"))
            for (var keys = Object.keys(message.cacheHitsPerVersion), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 4, wireType 2 =*/34).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).uint64(message.cacheHitsPerVersion[keys[i]]).ldelim();
        if (message.cacheLatencyCount != null && message.cacheLatencyCount.length) {
            writer.uint32(/* id 5, wireType 2 =*/42).fork();
            for (var i = 0; i < message.cacheLatencyCount.length; ++i)
                writer.int64(message.cacheLatencyCount[i]);
            writer.ldelim();
        }
        if (message.rootErrorStats != null && Object.hasOwnProperty.call(message, "rootErrorStats"))
            $root.PathErrorStats.encode(message.rootErrorStats, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.requestsWithErrorsCount != null && Object.hasOwnProperty.call(message, "requestsWithErrorsCount"))
            writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.requestsWithErrorsCount);
        if (message.publicCacheTtlCount != null && message.publicCacheTtlCount.length) {
            writer.uint32(/* id 8, wireType 2 =*/66).fork();
            for (var i = 0; i < message.publicCacheTtlCount.length; ++i)
                writer.int64(message.publicCacheTtlCount[i]);
            writer.ldelim();
        }
        if (message.privateCacheTtlCount != null && message.privateCacheTtlCount.length) {
            writer.uint32(/* id 9, wireType 2 =*/74).fork();
            for (var i = 0; i < message.privateCacheTtlCount.length; ++i)
                writer.int64(message.privateCacheTtlCount[i]);
            writer.ldelim();
        }
        if (message.persistedQueryHitsPerVersion != null && Object.hasOwnProperty.call(message, "persistedQueryHitsPerVersion"))
            for (var keys = Object.keys(message.persistedQueryHitsPerVersion), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 10, wireType 2 =*/82).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).uint64(message.persistedQueryHitsPerVersion[keys[i]]).ldelim();
        if (message.persistedQueryMissesPerVersion != null && Object.hasOwnProperty.call(message, "persistedQueryMissesPerVersion"))
            for (var keys = Object.keys(message.persistedQueryMissesPerVersion), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 11, wireType 2 =*/90).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).uint64(message.persistedQueryMissesPerVersion[keys[i]]).ldelim();
        if (message.registeredOperationCountPerVersion != null && Object.hasOwnProperty.call(message, "registeredOperationCountPerVersion"))
            for (var keys = Object.keys(message.registeredOperationCountPerVersion), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 12, wireType 2 =*/98).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).uint64(message.registeredOperationCountPerVersion[keys[i]]).ldelim();
        if (message.forbiddenOperationCountPerVersion != null && Object.hasOwnProperty.call(message, "forbiddenOperationCountPerVersion"))
            for (var keys = Object.keys(message.forbiddenOperationCountPerVersion), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 13, wireType 2 =*/106).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).uint64(message.forbiddenOperationCountPerVersion[keys[i]]).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ClientNameStats message, length delimited. Does not implicitly {@link ClientNameStats.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ClientNameStats
     * @static
     * @param {IClientNameStats} message ClientNameStats message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClientNameStats.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ClientNameStats message from the specified reader or buffer.
     * @function decode
     * @memberof ClientNameStats
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ClientNameStats} ClientNameStats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClientNameStats.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClientNameStats(), key;
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.latencyCount && message.latencyCount.length))
                    message.latencyCount = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.latencyCount.push(reader.int64());
                } else
                    message.latencyCount.push(reader.int64());
                break;
            case 3:
                reader.skip().pos++;
                if (message.requestsCountPerVersion === $util.emptyObject)
                    message.requestsCountPerVersion = {};
                key = reader.string();
                reader.pos++;
                message.requestsCountPerVersion[key] = reader.uint64();
                break;
            case 4:
                reader.skip().pos++;
                if (message.cacheHitsPerVersion === $util.emptyObject)
                    message.cacheHitsPerVersion = {};
                key = reader.string();
                reader.pos++;
                message.cacheHitsPerVersion[key] = reader.uint64();
                break;
            case 10:
                reader.skip().pos++;
                if (message.persistedQueryHitsPerVersion === $util.emptyObject)
                    message.persistedQueryHitsPerVersion = {};
                key = reader.string();
                reader.pos++;
                message.persistedQueryHitsPerVersion[key] = reader.uint64();
                break;
            case 11:
                reader.skip().pos++;
                if (message.persistedQueryMissesPerVersion === $util.emptyObject)
                    message.persistedQueryMissesPerVersion = {};
                key = reader.string();
                reader.pos++;
                message.persistedQueryMissesPerVersion[key] = reader.uint64();
                break;
            case 12:
                reader.skip().pos++;
                if (message.registeredOperationCountPerVersion === $util.emptyObject)
                    message.registeredOperationCountPerVersion = {};
                key = reader.string();
                reader.pos++;
                message.registeredOperationCountPerVersion[key] = reader.uint64();
                break;
            case 13:
                reader.skip().pos++;
                if (message.forbiddenOperationCountPerVersion === $util.emptyObject)
                    message.forbiddenOperationCountPerVersion = {};
                key = reader.string();
                reader.pos++;
                message.forbiddenOperationCountPerVersion[key] = reader.uint64();
                break;
            case 5:
                if (!(message.cacheLatencyCount && message.cacheLatencyCount.length))
                    message.cacheLatencyCount = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.cacheLatencyCount.push(reader.int64());
                } else
                    message.cacheLatencyCount.push(reader.int64());
                break;
            case 6:
                message.rootErrorStats = $root.PathErrorStats.decode(reader, reader.uint32());
                break;
            case 7:
                message.requestsWithErrorsCount = reader.uint64();
                break;
            case 8:
                if (!(message.publicCacheTtlCount && message.publicCacheTtlCount.length))
                    message.publicCacheTtlCount = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.publicCacheTtlCount.push(reader.int64());
                } else
                    message.publicCacheTtlCount.push(reader.int64());
                break;
            case 9:
                if (!(message.privateCacheTtlCount && message.privateCacheTtlCount.length))
                    message.privateCacheTtlCount = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.privateCacheTtlCount.push(reader.int64());
                } else
                    message.privateCacheTtlCount.push(reader.int64());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ClientNameStats message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ClientNameStats
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ClientNameStats} ClientNameStats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClientNameStats.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ClientNameStats message.
     * @function verify
     * @memberof ClientNameStats
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ClientNameStats.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.latencyCount != null && message.hasOwnProperty("latencyCount")) {
            if (!Array.isArray(message.latencyCount))
                return "latencyCount: array expected";
            for (var i = 0; i < message.latencyCount.length; ++i)
                if (!$util.isInteger(message.latencyCount[i]) && !(message.latencyCount[i] && $util.isInteger(message.latencyCount[i].low) && $util.isInteger(message.latencyCount[i].high)))
                    return "latencyCount: integer|Long[] expected";
        }
        if (message.requestsCountPerVersion != null && message.hasOwnProperty("requestsCountPerVersion")) {
            if (!$util.isObject(message.requestsCountPerVersion))
                return "requestsCountPerVersion: object expected";
            var key = Object.keys(message.requestsCountPerVersion);
            for (var i = 0; i < key.length; ++i)
                if (!$util.isInteger(message.requestsCountPerVersion[key[i]]) && !(message.requestsCountPerVersion[key[i]] && $util.isInteger(message.requestsCountPerVersion[key[i]].low) && $util.isInteger(message.requestsCountPerVersion[key[i]].high)))
                    return "requestsCountPerVersion: integer|Long{k:string} expected";
        }
        if (message.cacheHitsPerVersion != null && message.hasOwnProperty("cacheHitsPerVersion")) {
            if (!$util.isObject(message.cacheHitsPerVersion))
                return "cacheHitsPerVersion: object expected";
            var key = Object.keys(message.cacheHitsPerVersion);
            for (var i = 0; i < key.length; ++i)
                if (!$util.isInteger(message.cacheHitsPerVersion[key[i]]) && !(message.cacheHitsPerVersion[key[i]] && $util.isInteger(message.cacheHitsPerVersion[key[i]].low) && $util.isInteger(message.cacheHitsPerVersion[key[i]].high)))
                    return "cacheHitsPerVersion: integer|Long{k:string} expected";
        }
        if (message.persistedQueryHitsPerVersion != null && message.hasOwnProperty("persistedQueryHitsPerVersion")) {
            if (!$util.isObject(message.persistedQueryHitsPerVersion))
                return "persistedQueryHitsPerVersion: object expected";
            var key = Object.keys(message.persistedQueryHitsPerVersion);
            for (var i = 0; i < key.length; ++i)
                if (!$util.isInteger(message.persistedQueryHitsPerVersion[key[i]]) && !(message.persistedQueryHitsPerVersion[key[i]] && $util.isInteger(message.persistedQueryHitsPerVersion[key[i]].low) && $util.isInteger(message.persistedQueryHitsPerVersion[key[i]].high)))
                    return "persistedQueryHitsPerVersion: integer|Long{k:string} expected";
        }
        if (message.persistedQueryMissesPerVersion != null && message.hasOwnProperty("persistedQueryMissesPerVersion")) {
            if (!$util.isObject(message.persistedQueryMissesPerVersion))
                return "persistedQueryMissesPerVersion: object expected";
            var key = Object.keys(message.persistedQueryMissesPerVersion);
            for (var i = 0; i < key.length; ++i)
                if (!$util.isInteger(message.persistedQueryMissesPerVersion[key[i]]) && !(message.persistedQueryMissesPerVersion[key[i]] && $util.isInteger(message.persistedQueryMissesPerVersion[key[i]].low) && $util.isInteger(message.persistedQueryMissesPerVersion[key[i]].high)))
                    return "persistedQueryMissesPerVersion: integer|Long{k:string} expected";
        }
        if (message.registeredOperationCountPerVersion != null && message.hasOwnProperty("registeredOperationCountPerVersion")) {
            if (!$util.isObject(message.registeredOperationCountPerVersion))
                return "registeredOperationCountPerVersion: object expected";
            var key = Object.keys(message.registeredOperationCountPerVersion);
            for (var i = 0; i < key.length; ++i)
                if (!$util.isInteger(message.registeredOperationCountPerVersion[key[i]]) && !(message.registeredOperationCountPerVersion[key[i]] && $util.isInteger(message.registeredOperationCountPerVersion[key[i]].low) && $util.isInteger(message.registeredOperationCountPerVersion[key[i]].high)))
                    return "registeredOperationCountPerVersion: integer|Long{k:string} expected";
        }
        if (message.forbiddenOperationCountPerVersion != null && message.hasOwnProperty("forbiddenOperationCountPerVersion")) {
            if (!$util.isObject(message.forbiddenOperationCountPerVersion))
                return "forbiddenOperationCountPerVersion: object expected";
            var key = Object.keys(message.forbiddenOperationCountPerVersion);
            for (var i = 0; i < key.length; ++i)
                if (!$util.isInteger(message.forbiddenOperationCountPerVersion[key[i]]) && !(message.forbiddenOperationCountPerVersion[key[i]] && $util.isInteger(message.forbiddenOperationCountPerVersion[key[i]].low) && $util.isInteger(message.forbiddenOperationCountPerVersion[key[i]].high)))
                    return "forbiddenOperationCountPerVersion: integer|Long{k:string} expected";
        }
        if (message.cacheLatencyCount != null && message.hasOwnProperty("cacheLatencyCount")) {
            if (!Array.isArray(message.cacheLatencyCount))
                return "cacheLatencyCount: array expected";
            for (var i = 0; i < message.cacheLatencyCount.length; ++i)
                if (!$util.isInteger(message.cacheLatencyCount[i]) && !(message.cacheLatencyCount[i] && $util.isInteger(message.cacheLatencyCount[i].low) && $util.isInteger(message.cacheLatencyCount[i].high)))
                    return "cacheLatencyCount: integer|Long[] expected";
        }
        if (message.rootErrorStats != null && message.hasOwnProperty("rootErrorStats")) {
            var error = $root.PathErrorStats.verify(message.rootErrorStats);
            if (error)
                return "rootErrorStats." + error;
        }
        if (message.requestsWithErrorsCount != null && message.hasOwnProperty("requestsWithErrorsCount"))
            if (!$util.isInteger(message.requestsWithErrorsCount) && !(message.requestsWithErrorsCount && $util.isInteger(message.requestsWithErrorsCount.low) && $util.isInteger(message.requestsWithErrorsCount.high)))
                return "requestsWithErrorsCount: integer|Long expected";
        if (message.publicCacheTtlCount != null && message.hasOwnProperty("publicCacheTtlCount")) {
            if (!Array.isArray(message.publicCacheTtlCount))
                return "publicCacheTtlCount: array expected";
            for (var i = 0; i < message.publicCacheTtlCount.length; ++i)
                if (!$util.isInteger(message.publicCacheTtlCount[i]) && !(message.publicCacheTtlCount[i] && $util.isInteger(message.publicCacheTtlCount[i].low) && $util.isInteger(message.publicCacheTtlCount[i].high)))
                    return "publicCacheTtlCount: integer|Long[] expected";
        }
        if (message.privateCacheTtlCount != null && message.hasOwnProperty("privateCacheTtlCount")) {
            if (!Array.isArray(message.privateCacheTtlCount))
                return "privateCacheTtlCount: array expected";
            for (var i = 0; i < message.privateCacheTtlCount.length; ++i)
                if (!$util.isInteger(message.privateCacheTtlCount[i]) && !(message.privateCacheTtlCount[i] && $util.isInteger(message.privateCacheTtlCount[i].low) && $util.isInteger(message.privateCacheTtlCount[i].high)))
                    return "privateCacheTtlCount: integer|Long[] expected";
        }
        return null;
    };

    /**
     * Creates a ClientNameStats message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ClientNameStats
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ClientNameStats} ClientNameStats
     */
    ClientNameStats.fromObject = function fromObject(object) {
        if (object instanceof $root.ClientNameStats)
            return object;
        var message = new $root.ClientNameStats();
        if (object.latencyCount) {
            if (!Array.isArray(object.latencyCount))
                throw TypeError(".ClientNameStats.latencyCount: array expected");
            message.latencyCount = [];
            for (var i = 0; i < object.latencyCount.length; ++i)
                if ($util.Long)
                    (message.latencyCount[i] = $util.Long.fromValue(object.latencyCount[i])).unsigned = false;
                else if (typeof object.latencyCount[i] === "string")
                    message.latencyCount[i] = parseInt(object.latencyCount[i], 10);
                else if (typeof object.latencyCount[i] === "number")
                    message.latencyCount[i] = object.latencyCount[i];
                else if (typeof object.latencyCount[i] === "object")
                    message.latencyCount[i] = new $util.LongBits(object.latencyCount[i].low >>> 0, object.latencyCount[i].high >>> 0).toNumber();
        }
        if (object.requestsCountPerVersion) {
            if (typeof object.requestsCountPerVersion !== "object")
                throw TypeError(".ClientNameStats.requestsCountPerVersion: object expected");
            message.requestsCountPerVersion = {};
            for (var keys = Object.keys(object.requestsCountPerVersion), i = 0; i < keys.length; ++i)
                if ($util.Long)
                    (message.requestsCountPerVersion[keys[i]] = $util.Long.fromValue(object.requestsCountPerVersion[keys[i]])).unsigned = true;
                else if (typeof object.requestsCountPerVersion[keys[i]] === "string")
                    message.requestsCountPerVersion[keys[i]] = parseInt(object.requestsCountPerVersion[keys[i]], 10);
                else if (typeof object.requestsCountPerVersion[keys[i]] === "number")
                    message.requestsCountPerVersion[keys[i]] = object.requestsCountPerVersion[keys[i]];
                else if (typeof object.requestsCountPerVersion[keys[i]] === "object")
                    message.requestsCountPerVersion[keys[i]] = new $util.LongBits(object.requestsCountPerVersion[keys[i]].low >>> 0, object.requestsCountPerVersion[keys[i]].high >>> 0).toNumber(true);
        }
        if (object.cacheHitsPerVersion) {
            if (typeof object.cacheHitsPerVersion !== "object")
                throw TypeError(".ClientNameStats.cacheHitsPerVersion: object expected");
            message.cacheHitsPerVersion = {};
            for (var keys = Object.keys(object.cacheHitsPerVersion), i = 0; i < keys.length; ++i)
                if ($util.Long)
                    (message.cacheHitsPerVersion[keys[i]] = $util.Long.fromValue(object.cacheHitsPerVersion[keys[i]])).unsigned = true;
                else if (typeof object.cacheHitsPerVersion[keys[i]] === "string")
                    message.cacheHitsPerVersion[keys[i]] = parseInt(object.cacheHitsPerVersion[keys[i]], 10);
                else if (typeof object.cacheHitsPerVersion[keys[i]] === "number")
                    message.cacheHitsPerVersion[keys[i]] = object.cacheHitsPerVersion[keys[i]];
                else if (typeof object.cacheHitsPerVersion[keys[i]] === "object")
                    message.cacheHitsPerVersion[keys[i]] = new $util.LongBits(object.cacheHitsPerVersion[keys[i]].low >>> 0, object.cacheHitsPerVersion[keys[i]].high >>> 0).toNumber(true);
        }
        if (object.persistedQueryHitsPerVersion) {
            if (typeof object.persistedQueryHitsPerVersion !== "object")
                throw TypeError(".ClientNameStats.persistedQueryHitsPerVersion: object expected");
            message.persistedQueryHitsPerVersion = {};
            for (var keys = Object.keys(object.persistedQueryHitsPerVersion), i = 0; i < keys.length; ++i)
                if ($util.Long)
                    (message.persistedQueryHitsPerVersion[keys[i]] = $util.Long.fromValue(object.persistedQueryHitsPerVersion[keys[i]])).unsigned = true;
                else if (typeof object.persistedQueryHitsPerVersion[keys[i]] === "string")
                    message.persistedQueryHitsPerVersion[keys[i]] = parseInt(object.persistedQueryHitsPerVersion[keys[i]], 10);
                else if (typeof object.persistedQueryHitsPerVersion[keys[i]] === "number")
                    message.persistedQueryHitsPerVersion[keys[i]] = object.persistedQueryHitsPerVersion[keys[i]];
                else if (typeof object.persistedQueryHitsPerVersion[keys[i]] === "object")
                    message.persistedQueryHitsPerVersion[keys[i]] = new $util.LongBits(object.persistedQueryHitsPerVersion[keys[i]].low >>> 0, object.persistedQueryHitsPerVersion[keys[i]].high >>> 0).toNumber(true);
        }
        if (object.persistedQueryMissesPerVersion) {
            if (typeof object.persistedQueryMissesPerVersion !== "object")
                throw TypeError(".ClientNameStats.persistedQueryMissesPerVersion: object expected");
            message.persistedQueryMissesPerVersion = {};
            for (var keys = Object.keys(object.persistedQueryMissesPerVersion), i = 0; i < keys.length; ++i)
                if ($util.Long)
                    (message.persistedQueryMissesPerVersion[keys[i]] = $util.Long.fromValue(object.persistedQueryMissesPerVersion[keys[i]])).unsigned = true;
                else if (typeof object.persistedQueryMissesPerVersion[keys[i]] === "string")
                    message.persistedQueryMissesPerVersion[keys[i]] = parseInt(object.persistedQueryMissesPerVersion[keys[i]], 10);
                else if (typeof object.persistedQueryMissesPerVersion[keys[i]] === "number")
                    message.persistedQueryMissesPerVersion[keys[i]] = object.persistedQueryMissesPerVersion[keys[i]];
                else if (typeof object.persistedQueryMissesPerVersion[keys[i]] === "object")
                    message.persistedQueryMissesPerVersion[keys[i]] = new $util.LongBits(object.persistedQueryMissesPerVersion[keys[i]].low >>> 0, object.persistedQueryMissesPerVersion[keys[i]].high >>> 0).toNumber(true);
        }
        if (object.registeredOperationCountPerVersion) {
            if (typeof object.registeredOperationCountPerVersion !== "object")
                throw TypeError(".ClientNameStats.registeredOperationCountPerVersion: object expected");
            message.registeredOperationCountPerVersion = {};
            for (var keys = Object.keys(object.registeredOperationCountPerVersion), i = 0; i < keys.length; ++i)
                if ($util.Long)
                    (message.registeredOperationCountPerVersion[keys[i]] = $util.Long.fromValue(object.registeredOperationCountPerVersion[keys[i]])).unsigned = true;
                else if (typeof object.registeredOperationCountPerVersion[keys[i]] === "string")
                    message.registeredOperationCountPerVersion[keys[i]] = parseInt(object.registeredOperationCountPerVersion[keys[i]], 10);
                else if (typeof object.registeredOperationCountPerVersion[keys[i]] === "number")
                    message.registeredOperationCountPerVersion[keys[i]] = object.registeredOperationCountPerVersion[keys[i]];
                else if (typeof object.registeredOperationCountPerVersion[keys[i]] === "object")
                    message.registeredOperationCountPerVersion[keys[i]] = new $util.LongBits(object.registeredOperationCountPerVersion[keys[i]].low >>> 0, object.registeredOperationCountPerVersion[keys[i]].high >>> 0).toNumber(true);
        }
        if (object.forbiddenOperationCountPerVersion) {
            if (typeof object.forbiddenOperationCountPerVersion !== "object")
                throw TypeError(".ClientNameStats.forbiddenOperationCountPerVersion: object expected");
            message.forbiddenOperationCountPerVersion = {};
            for (var keys = Object.keys(object.forbiddenOperationCountPerVersion), i = 0; i < keys.length; ++i)
                if ($util.Long)
                    (message.forbiddenOperationCountPerVersion[keys[i]] = $util.Long.fromValue(object.forbiddenOperationCountPerVersion[keys[i]])).unsigned = true;
                else if (typeof object.forbiddenOperationCountPerVersion[keys[i]] === "string")
                    message.forbiddenOperationCountPerVersion[keys[i]] = parseInt(object.forbiddenOperationCountPerVersion[keys[i]], 10);
                else if (typeof object.forbiddenOperationCountPerVersion[keys[i]] === "number")
                    message.forbiddenOperationCountPerVersion[keys[i]] = object.forbiddenOperationCountPerVersion[keys[i]];
                else if (typeof object.forbiddenOperationCountPerVersion[keys[i]] === "object")
                    message.forbiddenOperationCountPerVersion[keys[i]] = new $util.LongBits(object.forbiddenOperationCountPerVersion[keys[i]].low >>> 0, object.forbiddenOperationCountPerVersion[keys[i]].high >>> 0).toNumber(true);
        }
        if (object.cacheLatencyCount) {
            if (!Array.isArray(object.cacheLatencyCount))
                throw TypeError(".ClientNameStats.cacheLatencyCount: array expected");
            message.cacheLatencyCount = [];
            for (var i = 0; i < object.cacheLatencyCount.length; ++i)
                if ($util.Long)
                    (message.cacheLatencyCount[i] = $util.Long.fromValue(object.cacheLatencyCount[i])).unsigned = false;
                else if (typeof object.cacheLatencyCount[i] === "string")
                    message.cacheLatencyCount[i] = parseInt(object.cacheLatencyCount[i], 10);
                else if (typeof object.cacheLatencyCount[i] === "number")
                    message.cacheLatencyCount[i] = object.cacheLatencyCount[i];
                else if (typeof object.cacheLatencyCount[i] === "object")
                    message.cacheLatencyCount[i] = new $util.LongBits(object.cacheLatencyCount[i].low >>> 0, object.cacheLatencyCount[i].high >>> 0).toNumber();
        }
        if (object.rootErrorStats != null) {
            if (typeof object.rootErrorStats !== "object")
                throw TypeError(".ClientNameStats.rootErrorStats: object expected");
            message.rootErrorStats = $root.PathErrorStats.fromObject(object.rootErrorStats);
        }
        if (object.requestsWithErrorsCount != null)
            if ($util.Long)
                (message.requestsWithErrorsCount = $util.Long.fromValue(object.requestsWithErrorsCount)).unsigned = true;
            else if (typeof object.requestsWithErrorsCount === "string")
                message.requestsWithErrorsCount = parseInt(object.requestsWithErrorsCount, 10);
            else if (typeof object.requestsWithErrorsCount === "number")
                message.requestsWithErrorsCount = object.requestsWithErrorsCount;
            else if (typeof object.requestsWithErrorsCount === "object")
                message.requestsWithErrorsCount = new $util.LongBits(object.requestsWithErrorsCount.low >>> 0, object.requestsWithErrorsCount.high >>> 0).toNumber(true);
        if (object.publicCacheTtlCount) {
            if (!Array.isArray(object.publicCacheTtlCount))
                throw TypeError(".ClientNameStats.publicCacheTtlCount: array expected");
            message.publicCacheTtlCount = [];
            for (var i = 0; i < object.publicCacheTtlCount.length; ++i)
                if ($util.Long)
                    (message.publicCacheTtlCount[i] = $util.Long.fromValue(object.publicCacheTtlCount[i])).unsigned = false;
                else if (typeof object.publicCacheTtlCount[i] === "string")
                    message.publicCacheTtlCount[i] = parseInt(object.publicCacheTtlCount[i], 10);
                else if (typeof object.publicCacheTtlCount[i] === "number")
                    message.publicCacheTtlCount[i] = object.publicCacheTtlCount[i];
                else if (typeof object.publicCacheTtlCount[i] === "object")
                    message.publicCacheTtlCount[i] = new $util.LongBits(object.publicCacheTtlCount[i].low >>> 0, object.publicCacheTtlCount[i].high >>> 0).toNumber();
        }
        if (object.privateCacheTtlCount) {
            if (!Array.isArray(object.privateCacheTtlCount))
                throw TypeError(".ClientNameStats.privateCacheTtlCount: array expected");
            message.privateCacheTtlCount = [];
            for (var i = 0; i < object.privateCacheTtlCount.length; ++i)
                if ($util.Long)
                    (message.privateCacheTtlCount[i] = $util.Long.fromValue(object.privateCacheTtlCount[i])).unsigned = false;
                else if (typeof object.privateCacheTtlCount[i] === "string")
                    message.privateCacheTtlCount[i] = parseInt(object.privateCacheTtlCount[i], 10);
                else if (typeof object.privateCacheTtlCount[i] === "number")
                    message.privateCacheTtlCount[i] = object.privateCacheTtlCount[i];
                else if (typeof object.privateCacheTtlCount[i] === "object")
                    message.privateCacheTtlCount[i] = new $util.LongBits(object.privateCacheTtlCount[i].low >>> 0, object.privateCacheTtlCount[i].high >>> 0).toNumber();
        }
        return message;
    };

    /**
     * Creates a plain object from a ClientNameStats message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ClientNameStats
     * @static
     * @param {ClientNameStats} message ClientNameStats
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ClientNameStats.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.latencyCount = [];
            object.cacheLatencyCount = [];
            object.publicCacheTtlCount = [];
            object.privateCacheTtlCount = [];
        }
        if (options.objects || options.defaults) {
            object.requestsCountPerVersion = {};
            object.cacheHitsPerVersion = {};
            object.persistedQueryHitsPerVersion = {};
            object.persistedQueryMissesPerVersion = {};
            object.registeredOperationCountPerVersion = {};
            object.forbiddenOperationCountPerVersion = {};
        }
        if (options.defaults) {
            object.rootErrorStats = null;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.requestsWithErrorsCount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.requestsWithErrorsCount = options.longs === String ? "0" : 0;
        }
        if (message.latencyCount && message.latencyCount.length) {
            object.latencyCount = [];
            for (var j = 0; j < message.latencyCount.length; ++j)
                if (typeof message.latencyCount[j] === "number")
                    object.latencyCount[j] = options.longs === String ? String(message.latencyCount[j]) : message.latencyCount[j];
                else
                    object.latencyCount[j] = options.longs === String ? $util.Long.prototype.toString.call(message.latencyCount[j]) : options.longs === Number ? new $util.LongBits(message.latencyCount[j].low >>> 0, message.latencyCount[j].high >>> 0).toNumber() : message.latencyCount[j];
        }
        var keys2;
        if (message.requestsCountPerVersion && (keys2 = Object.keys(message.requestsCountPerVersion)).length) {
            object.requestsCountPerVersion = {};
            for (var j = 0; j < keys2.length; ++j)
                if (typeof message.requestsCountPerVersion[keys2[j]] === "number")
                    object.requestsCountPerVersion[keys2[j]] = options.longs === String ? String(message.requestsCountPerVersion[keys2[j]]) : message.requestsCountPerVersion[keys2[j]];
                else
                    object.requestsCountPerVersion[keys2[j]] = options.longs === String ? $util.Long.prototype.toString.call(message.requestsCountPerVersion[keys2[j]]) : options.longs === Number ? new $util.LongBits(message.requestsCountPerVersion[keys2[j]].low >>> 0, message.requestsCountPerVersion[keys2[j]].high >>> 0).toNumber(true) : message.requestsCountPerVersion[keys2[j]];
        }
        if (message.cacheHitsPerVersion && (keys2 = Object.keys(message.cacheHitsPerVersion)).length) {
            object.cacheHitsPerVersion = {};
            for (var j = 0; j < keys2.length; ++j)
                if (typeof message.cacheHitsPerVersion[keys2[j]] === "number")
                    object.cacheHitsPerVersion[keys2[j]] = options.longs === String ? String(message.cacheHitsPerVersion[keys2[j]]) : message.cacheHitsPerVersion[keys2[j]];
                else
                    object.cacheHitsPerVersion[keys2[j]] = options.longs === String ? $util.Long.prototype.toString.call(message.cacheHitsPerVersion[keys2[j]]) : options.longs === Number ? new $util.LongBits(message.cacheHitsPerVersion[keys2[j]].low >>> 0, message.cacheHitsPerVersion[keys2[j]].high >>> 0).toNumber(true) : message.cacheHitsPerVersion[keys2[j]];
        }
        if (message.cacheLatencyCount && message.cacheLatencyCount.length) {
            object.cacheLatencyCount = [];
            for (var j = 0; j < message.cacheLatencyCount.length; ++j)
                if (typeof message.cacheLatencyCount[j] === "number")
                    object.cacheLatencyCount[j] = options.longs === String ? String(message.cacheLatencyCount[j]) : message.cacheLatencyCount[j];
                else
                    object.cacheLatencyCount[j] = options.longs === String ? $util.Long.prototype.toString.call(message.cacheLatencyCount[j]) : options.longs === Number ? new $util.LongBits(message.cacheLatencyCount[j].low >>> 0, message.cacheLatencyCount[j].high >>> 0).toNumber() : message.cacheLatencyCount[j];
        }
        if (message.rootErrorStats != null && message.hasOwnProperty("rootErrorStats"))
            object.rootErrorStats = $root.PathErrorStats.toObject(message.rootErrorStats, options);
        if (message.requestsWithErrorsCount != null && message.hasOwnProperty("requestsWithErrorsCount"))
            if (typeof message.requestsWithErrorsCount === "number")
                object.requestsWithErrorsCount = options.longs === String ? String(message.requestsWithErrorsCount) : message.requestsWithErrorsCount;
            else
                object.requestsWithErrorsCount = options.longs === String ? $util.Long.prototype.toString.call(message.requestsWithErrorsCount) : options.longs === Number ? new $util.LongBits(message.requestsWithErrorsCount.low >>> 0, message.requestsWithErrorsCount.high >>> 0).toNumber(true) : message.requestsWithErrorsCount;
        if (message.publicCacheTtlCount && message.publicCacheTtlCount.length) {
            object.publicCacheTtlCount = [];
            for (var j = 0; j < message.publicCacheTtlCount.length; ++j)
                if (typeof message.publicCacheTtlCount[j] === "number")
                    object.publicCacheTtlCount[j] = options.longs === String ? String(message.publicCacheTtlCount[j]) : message.publicCacheTtlCount[j];
                else
                    object.publicCacheTtlCount[j] = options.longs === String ? $util.Long.prototype.toString.call(message.publicCacheTtlCount[j]) : options.longs === Number ? new $util.LongBits(message.publicCacheTtlCount[j].low >>> 0, message.publicCacheTtlCount[j].high >>> 0).toNumber() : message.publicCacheTtlCount[j];
        }
        if (message.privateCacheTtlCount && message.privateCacheTtlCount.length) {
            object.privateCacheTtlCount = [];
            for (var j = 0; j < message.privateCacheTtlCount.length; ++j)
                if (typeof message.privateCacheTtlCount[j] === "number")
                    object.privateCacheTtlCount[j] = options.longs === String ? String(message.privateCacheTtlCount[j]) : message.privateCacheTtlCount[j];
                else
                    object.privateCacheTtlCount[j] = options.longs === String ? $util.Long.prototype.toString.call(message.privateCacheTtlCount[j]) : options.longs === Number ? new $util.LongBits(message.privateCacheTtlCount[j].low >>> 0, message.privateCacheTtlCount[j].high >>> 0).toNumber() : message.privateCacheTtlCount[j];
        }
        if (message.persistedQueryHitsPerVersion && (keys2 = Object.keys(message.persistedQueryHitsPerVersion)).length) {
            object.persistedQueryHitsPerVersion = {};
            for (var j = 0; j < keys2.length; ++j)
                if (typeof message.persistedQueryHitsPerVersion[keys2[j]] === "number")
                    object.persistedQueryHitsPerVersion[keys2[j]] = options.longs === String ? String(message.persistedQueryHitsPerVersion[keys2[j]]) : message.persistedQueryHitsPerVersion[keys2[j]];
                else
                    object.persistedQueryHitsPerVersion[keys2[j]] = options.longs === String ? $util.Long.prototype.toString.call(message.persistedQueryHitsPerVersion[keys2[j]]) : options.longs === Number ? new $util.LongBits(message.persistedQueryHitsPerVersion[keys2[j]].low >>> 0, message.persistedQueryHitsPerVersion[keys2[j]].high >>> 0).toNumber(true) : message.persistedQueryHitsPerVersion[keys2[j]];
        }
        if (message.persistedQueryMissesPerVersion && (keys2 = Object.keys(message.persistedQueryMissesPerVersion)).length) {
            object.persistedQueryMissesPerVersion = {};
            for (var j = 0; j < keys2.length; ++j)
                if (typeof message.persistedQueryMissesPerVersion[keys2[j]] === "number")
                    object.persistedQueryMissesPerVersion[keys2[j]] = options.longs === String ? String(message.persistedQueryMissesPerVersion[keys2[j]]) : message.persistedQueryMissesPerVersion[keys2[j]];
                else
                    object.persistedQueryMissesPerVersion[keys2[j]] = options.longs === String ? $util.Long.prototype.toString.call(message.persistedQueryMissesPerVersion[keys2[j]]) : options.longs === Number ? new $util.LongBits(message.persistedQueryMissesPerVersion[keys2[j]].low >>> 0, message.persistedQueryMissesPerVersion[keys2[j]].high >>> 0).toNumber(true) : message.persistedQueryMissesPerVersion[keys2[j]];
        }
        if (message.registeredOperationCountPerVersion && (keys2 = Object.keys(message.registeredOperationCountPerVersion)).length) {
            object.registeredOperationCountPerVersion = {};
            for (var j = 0; j < keys2.length; ++j)
                if (typeof message.registeredOperationCountPerVersion[keys2[j]] === "number")
                    object.registeredOperationCountPerVersion[keys2[j]] = options.longs === String ? String(message.registeredOperationCountPerVersion[keys2[j]]) : message.registeredOperationCountPerVersion[keys2[j]];
                else
                    object.registeredOperationCountPerVersion[keys2[j]] = options.longs === String ? $util.Long.prototype.toString.call(message.registeredOperationCountPerVersion[keys2[j]]) : options.longs === Number ? new $util.LongBits(message.registeredOperationCountPerVersion[keys2[j]].low >>> 0, message.registeredOperationCountPerVersion[keys2[j]].high >>> 0).toNumber(true) : message.registeredOperationCountPerVersion[keys2[j]];
        }
        if (message.forbiddenOperationCountPerVersion && (keys2 = Object.keys(message.forbiddenOperationCountPerVersion)).length) {
            object.forbiddenOperationCountPerVersion = {};
            for (var j = 0; j < keys2.length; ++j)
                if (typeof message.forbiddenOperationCountPerVersion[keys2[j]] === "number")
                    object.forbiddenOperationCountPerVersion[keys2[j]] = options.longs === String ? String(message.forbiddenOperationCountPerVersion[keys2[j]]) : message.forbiddenOperationCountPerVersion[keys2[j]];
                else
                    object.forbiddenOperationCountPerVersion[keys2[j]] = options.longs === String ? $util.Long.prototype.toString.call(message.forbiddenOperationCountPerVersion[keys2[j]]) : options.longs === Number ? new $util.LongBits(message.forbiddenOperationCountPerVersion[keys2[j]].low >>> 0, message.forbiddenOperationCountPerVersion[keys2[j]].high >>> 0).toNumber(true) : message.forbiddenOperationCountPerVersion[keys2[j]];
        }
        return object;
    };

    /**
     * Converts this ClientNameStats to JSON.
     * @function toJSON
     * @memberof ClientNameStats
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ClientNameStats.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ClientNameStats;
})();

$root.QueryLatencyStats = (function() {

    /**
     * Properties of a QueryLatencyStats.
     * @exports IQueryLatencyStats
     * @interface IQueryLatencyStats
     * @property {Array.<number>|null} [latencyCount] QueryLatencyStats latencyCount
     * @property {number|null} [requestCount] QueryLatencyStats requestCount
     * @property {number|null} [cacheHits] QueryLatencyStats cacheHits
     * @property {number|null} [persistedQueryHits] QueryLatencyStats persistedQueryHits
     * @property {number|null} [persistedQueryMisses] QueryLatencyStats persistedQueryMisses
     * @property {Array.<number>|null} [cacheLatencyCount] QueryLatencyStats cacheLatencyCount
     * @property {IPathErrorStats|null} [rootErrorStats] QueryLatencyStats rootErrorStats
     * @property {number|null} [requestsWithErrorsCount] QueryLatencyStats requestsWithErrorsCount
     * @property {Array.<number>|null} [publicCacheTtlCount] QueryLatencyStats publicCacheTtlCount
     * @property {Array.<number>|null} [privateCacheTtlCount] QueryLatencyStats privateCacheTtlCount
     * @property {number|null} [registeredOperationCount] QueryLatencyStats registeredOperationCount
     * @property {number|null} [forbiddenOperationCount] QueryLatencyStats forbiddenOperationCount
     */

    /**
     * Constructs a new QueryLatencyStats.
     * @exports QueryLatencyStats
     * @classdesc Represents a QueryLatencyStats.
     * @implements IQueryLatencyStats
     * @constructor
     * @param {IQueryLatencyStats=} [properties] Properties to set
     */
    function QueryLatencyStats(properties) {
        this.latencyCount = [];
        this.cacheLatencyCount = [];
        this.publicCacheTtlCount = [];
        this.privateCacheTtlCount = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * QueryLatencyStats latencyCount.
     * @member {Array.<number>} latencyCount
     * @memberof QueryLatencyStats
     * @instance
     */
    QueryLatencyStats.prototype.latencyCount = $util.emptyArray;

    /**
     * QueryLatencyStats requestCount.
     * @member {number} requestCount
     * @memberof QueryLatencyStats
     * @instance
     */
    QueryLatencyStats.prototype.requestCount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * QueryLatencyStats cacheHits.
     * @member {number} cacheHits
     * @memberof QueryLatencyStats
     * @instance
     */
    QueryLatencyStats.prototype.cacheHits = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * QueryLatencyStats persistedQueryHits.
     * @member {number} persistedQueryHits
     * @memberof QueryLatencyStats
     * @instance
     */
    QueryLatencyStats.prototype.persistedQueryHits = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * QueryLatencyStats persistedQueryMisses.
     * @member {number} persistedQueryMisses
     * @memberof QueryLatencyStats
     * @instance
     */
    QueryLatencyStats.prototype.persistedQueryMisses = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * QueryLatencyStats cacheLatencyCount.
     * @member {Array.<number>} cacheLatencyCount
     * @memberof QueryLatencyStats
     * @instance
     */
    QueryLatencyStats.prototype.cacheLatencyCount = $util.emptyArray;

    /**
     * QueryLatencyStats rootErrorStats.
     * @member {IPathErrorStats|null|undefined} rootErrorStats
     * @memberof QueryLatencyStats
     * @instance
     */
    QueryLatencyStats.prototype.rootErrorStats = null;

    /**
     * QueryLatencyStats requestsWithErrorsCount.
     * @member {number} requestsWithErrorsCount
     * @memberof QueryLatencyStats
     * @instance
     */
    QueryLatencyStats.prototype.requestsWithErrorsCount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * QueryLatencyStats publicCacheTtlCount.
     * @member {Array.<number>} publicCacheTtlCount
     * @memberof QueryLatencyStats
     * @instance
     */
    QueryLatencyStats.prototype.publicCacheTtlCount = $util.emptyArray;

    /**
     * QueryLatencyStats privateCacheTtlCount.
     * @member {Array.<number>} privateCacheTtlCount
     * @memberof QueryLatencyStats
     * @instance
     */
    QueryLatencyStats.prototype.privateCacheTtlCount = $util.emptyArray;

    /**
     * QueryLatencyStats registeredOperationCount.
     * @member {number} registeredOperationCount
     * @memberof QueryLatencyStats
     * @instance
     */
    QueryLatencyStats.prototype.registeredOperationCount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * QueryLatencyStats forbiddenOperationCount.
     * @member {number} forbiddenOperationCount
     * @memberof QueryLatencyStats
     * @instance
     */
    QueryLatencyStats.prototype.forbiddenOperationCount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new QueryLatencyStats instance using the specified properties.
     * @function create
     * @memberof QueryLatencyStats
     * @static
     * @param {IQueryLatencyStats=} [properties] Properties to set
     * @returns {QueryLatencyStats} QueryLatencyStats instance
     */
    QueryLatencyStats.create = function create(properties) {
        return new QueryLatencyStats(properties);
    };

    /**
     * Encodes the specified QueryLatencyStats message. Does not implicitly {@link QueryLatencyStats.verify|verify} messages.
     * @function encode
     * @memberof QueryLatencyStats
     * @static
     * @param {IQueryLatencyStats} message QueryLatencyStats message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    QueryLatencyStats.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.latencyCount != null && message.latencyCount.length) {
            writer.uint32(/* id 1, wireType 2 =*/10).fork();
            for (var i = 0; i < message.latencyCount.length; ++i)
                writer.int64(message.latencyCount[i]);
            writer.ldelim();
        }
        if (message.requestCount != null && Object.hasOwnProperty.call(message, "requestCount"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.requestCount);
        if (message.cacheHits != null && Object.hasOwnProperty.call(message, "cacheHits"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.cacheHits);
        if (message.persistedQueryHits != null && Object.hasOwnProperty.call(message, "persistedQueryHits"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.persistedQueryHits);
        if (message.persistedQueryMisses != null && Object.hasOwnProperty.call(message, "persistedQueryMisses"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.persistedQueryMisses);
        if (message.cacheLatencyCount != null && message.cacheLatencyCount.length) {
            writer.uint32(/* id 6, wireType 2 =*/50).fork();
            for (var i = 0; i < message.cacheLatencyCount.length; ++i)
                writer.int64(message.cacheLatencyCount[i]);
            writer.ldelim();
        }
        if (message.rootErrorStats != null && Object.hasOwnProperty.call(message, "rootErrorStats"))
            $root.PathErrorStats.encode(message.rootErrorStats, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.requestsWithErrorsCount != null && Object.hasOwnProperty.call(message, "requestsWithErrorsCount"))
            writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.requestsWithErrorsCount);
        if (message.publicCacheTtlCount != null && message.publicCacheTtlCount.length) {
            writer.uint32(/* id 9, wireType 2 =*/74).fork();
            for (var i = 0; i < message.publicCacheTtlCount.length; ++i)
                writer.int64(message.publicCacheTtlCount[i]);
            writer.ldelim();
        }
        if (message.privateCacheTtlCount != null && message.privateCacheTtlCount.length) {
            writer.uint32(/* id 10, wireType 2 =*/82).fork();
            for (var i = 0; i < message.privateCacheTtlCount.length; ++i)
                writer.int64(message.privateCacheTtlCount[i]);
            writer.ldelim();
        }
        if (message.registeredOperationCount != null && Object.hasOwnProperty.call(message, "registeredOperationCount"))
            writer.uint32(/* id 11, wireType 0 =*/88).uint64(message.registeredOperationCount);
        if (message.forbiddenOperationCount != null && Object.hasOwnProperty.call(message, "forbiddenOperationCount"))
            writer.uint32(/* id 12, wireType 0 =*/96).uint64(message.forbiddenOperationCount);
        return writer;
    };

    /**
     * Encodes the specified QueryLatencyStats message, length delimited. Does not implicitly {@link QueryLatencyStats.verify|verify} messages.
     * @function encodeDelimited
     * @memberof QueryLatencyStats
     * @static
     * @param {IQueryLatencyStats} message QueryLatencyStats message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    QueryLatencyStats.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a QueryLatencyStats message from the specified reader or buffer.
     * @function decode
     * @memberof QueryLatencyStats
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {QueryLatencyStats} QueryLatencyStats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    QueryLatencyStats.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.QueryLatencyStats();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.latencyCount && message.latencyCount.length))
                    message.latencyCount = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.latencyCount.push(reader.int64());
                } else
                    message.latencyCount.push(reader.int64());
                break;
            case 2:
                message.requestCount = reader.uint64();
                break;
            case 3:
                message.cacheHits = reader.uint64();
                break;
            case 4:
                message.persistedQueryHits = reader.uint64();
                break;
            case 5:
                message.persistedQueryMisses = reader.uint64();
                break;
            case 6:
                if (!(message.cacheLatencyCount && message.cacheLatencyCount.length))
                    message.cacheLatencyCount = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.cacheLatencyCount.push(reader.int64());
                } else
                    message.cacheLatencyCount.push(reader.int64());
                break;
            case 7:
                message.rootErrorStats = $root.PathErrorStats.decode(reader, reader.uint32());
                break;
            case 8:
                message.requestsWithErrorsCount = reader.uint64();
                break;
            case 9:
                if (!(message.publicCacheTtlCount && message.publicCacheTtlCount.length))
                    message.publicCacheTtlCount = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.publicCacheTtlCount.push(reader.int64());
                } else
                    message.publicCacheTtlCount.push(reader.int64());
                break;
            case 10:
                if (!(message.privateCacheTtlCount && message.privateCacheTtlCount.length))
                    message.privateCacheTtlCount = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.privateCacheTtlCount.push(reader.int64());
                } else
                    message.privateCacheTtlCount.push(reader.int64());
                break;
            case 11:
                message.registeredOperationCount = reader.uint64();
                break;
            case 12:
                message.forbiddenOperationCount = reader.uint64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a QueryLatencyStats message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof QueryLatencyStats
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {QueryLatencyStats} QueryLatencyStats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    QueryLatencyStats.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a QueryLatencyStats message.
     * @function verify
     * @memberof QueryLatencyStats
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    QueryLatencyStats.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.latencyCount != null && message.hasOwnProperty("latencyCount")) {
            if (!Array.isArray(message.latencyCount))
                return "latencyCount: array expected";
            for (var i = 0; i < message.latencyCount.length; ++i)
                if (!$util.isInteger(message.latencyCount[i]) && !(message.latencyCount[i] && $util.isInteger(message.latencyCount[i].low) && $util.isInteger(message.latencyCount[i].high)))
                    return "latencyCount: integer|Long[] expected";
        }
        if (message.requestCount != null && message.hasOwnProperty("requestCount"))
            if (!$util.isInteger(message.requestCount) && !(message.requestCount && $util.isInteger(message.requestCount.low) && $util.isInteger(message.requestCount.high)))
                return "requestCount: integer|Long expected";
        if (message.cacheHits != null && message.hasOwnProperty("cacheHits"))
            if (!$util.isInteger(message.cacheHits) && !(message.cacheHits && $util.isInteger(message.cacheHits.low) && $util.isInteger(message.cacheHits.high)))
                return "cacheHits: integer|Long expected";
        if (message.persistedQueryHits != null && message.hasOwnProperty("persistedQueryHits"))
            if (!$util.isInteger(message.persistedQueryHits) && !(message.persistedQueryHits && $util.isInteger(message.persistedQueryHits.low) && $util.isInteger(message.persistedQueryHits.high)))
                return "persistedQueryHits: integer|Long expected";
        if (message.persistedQueryMisses != null && message.hasOwnProperty("persistedQueryMisses"))
            if (!$util.isInteger(message.persistedQueryMisses) && !(message.persistedQueryMisses && $util.isInteger(message.persistedQueryMisses.low) && $util.isInteger(message.persistedQueryMisses.high)))
                return "persistedQueryMisses: integer|Long expected";
        if (message.cacheLatencyCount != null && message.hasOwnProperty("cacheLatencyCount")) {
            if (!Array.isArray(message.cacheLatencyCount))
                return "cacheLatencyCount: array expected";
            for (var i = 0; i < message.cacheLatencyCount.length; ++i)
                if (!$util.isInteger(message.cacheLatencyCount[i]) && !(message.cacheLatencyCount[i] && $util.isInteger(message.cacheLatencyCount[i].low) && $util.isInteger(message.cacheLatencyCount[i].high)))
                    return "cacheLatencyCount: integer|Long[] expected";
        }
        if (message.rootErrorStats != null && message.hasOwnProperty("rootErrorStats")) {
            var error = $root.PathErrorStats.verify(message.rootErrorStats);
            if (error)
                return "rootErrorStats." + error;
        }
        if (message.requestsWithErrorsCount != null && message.hasOwnProperty("requestsWithErrorsCount"))
            if (!$util.isInteger(message.requestsWithErrorsCount) && !(message.requestsWithErrorsCount && $util.isInteger(message.requestsWithErrorsCount.low) && $util.isInteger(message.requestsWithErrorsCount.high)))
                return "requestsWithErrorsCount: integer|Long expected";
        if (message.publicCacheTtlCount != null && message.hasOwnProperty("publicCacheTtlCount")) {
            if (!Array.isArray(message.publicCacheTtlCount))
                return "publicCacheTtlCount: array expected";
            for (var i = 0; i < message.publicCacheTtlCount.length; ++i)
                if (!$util.isInteger(message.publicCacheTtlCount[i]) && !(message.publicCacheTtlCount[i] && $util.isInteger(message.publicCacheTtlCount[i].low) && $util.isInteger(message.publicCacheTtlCount[i].high)))
                    return "publicCacheTtlCount: integer|Long[] expected";
        }
        if (message.privateCacheTtlCount != null && message.hasOwnProperty("privateCacheTtlCount")) {
            if (!Array.isArray(message.privateCacheTtlCount))
                return "privateCacheTtlCount: array expected";
            for (var i = 0; i < message.privateCacheTtlCount.length; ++i)
                if (!$util.isInteger(message.privateCacheTtlCount[i]) && !(message.privateCacheTtlCount[i] && $util.isInteger(message.privateCacheTtlCount[i].low) && $util.isInteger(message.privateCacheTtlCount[i].high)))
                    return "privateCacheTtlCount: integer|Long[] expected";
        }
        if (message.registeredOperationCount != null && message.hasOwnProperty("registeredOperationCount"))
            if (!$util.isInteger(message.registeredOperationCount) && !(message.registeredOperationCount && $util.isInteger(message.registeredOperationCount.low) && $util.isInteger(message.registeredOperationCount.high)))
                return "registeredOperationCount: integer|Long expected";
        if (message.forbiddenOperationCount != null && message.hasOwnProperty("forbiddenOperationCount"))
            if (!$util.isInteger(message.forbiddenOperationCount) && !(message.forbiddenOperationCount && $util.isInteger(message.forbiddenOperationCount.low) && $util.isInteger(message.forbiddenOperationCount.high)))
                return "forbiddenOperationCount: integer|Long expected";
        return null;
    };

    /**
     * Creates a QueryLatencyStats message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof QueryLatencyStats
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {QueryLatencyStats} QueryLatencyStats
     */
    QueryLatencyStats.fromObject = function fromObject(object) {
        if (object instanceof $root.QueryLatencyStats)
            return object;
        var message = new $root.QueryLatencyStats();
        if (object.latencyCount) {
            if (!Array.isArray(object.latencyCount))
                throw TypeError(".QueryLatencyStats.latencyCount: array expected");
            message.latencyCount = [];
            for (var i = 0; i < object.latencyCount.length; ++i)
                if ($util.Long)
                    (message.latencyCount[i] = $util.Long.fromValue(object.latencyCount[i])).unsigned = false;
                else if (typeof object.latencyCount[i] === "string")
                    message.latencyCount[i] = parseInt(object.latencyCount[i], 10);
                else if (typeof object.latencyCount[i] === "number")
                    message.latencyCount[i] = object.latencyCount[i];
                else if (typeof object.latencyCount[i] === "object")
                    message.latencyCount[i] = new $util.LongBits(object.latencyCount[i].low >>> 0, object.latencyCount[i].high >>> 0).toNumber();
        }
        if (object.requestCount != null)
            if ($util.Long)
                (message.requestCount = $util.Long.fromValue(object.requestCount)).unsigned = true;
            else if (typeof object.requestCount === "string")
                message.requestCount = parseInt(object.requestCount, 10);
            else if (typeof object.requestCount === "number")
                message.requestCount = object.requestCount;
            else if (typeof object.requestCount === "object")
                message.requestCount = new $util.LongBits(object.requestCount.low >>> 0, object.requestCount.high >>> 0).toNumber(true);
        if (object.cacheHits != null)
            if ($util.Long)
                (message.cacheHits = $util.Long.fromValue(object.cacheHits)).unsigned = true;
            else if (typeof object.cacheHits === "string")
                message.cacheHits = parseInt(object.cacheHits, 10);
            else if (typeof object.cacheHits === "number")
                message.cacheHits = object.cacheHits;
            else if (typeof object.cacheHits === "object")
                message.cacheHits = new $util.LongBits(object.cacheHits.low >>> 0, object.cacheHits.high >>> 0).toNumber(true);
        if (object.persistedQueryHits != null)
            if ($util.Long)
                (message.persistedQueryHits = $util.Long.fromValue(object.persistedQueryHits)).unsigned = true;
            else if (typeof object.persistedQueryHits === "string")
                message.persistedQueryHits = parseInt(object.persistedQueryHits, 10);
            else if (typeof object.persistedQueryHits === "number")
                message.persistedQueryHits = object.persistedQueryHits;
            else if (typeof object.persistedQueryHits === "object")
                message.persistedQueryHits = new $util.LongBits(object.persistedQueryHits.low >>> 0, object.persistedQueryHits.high >>> 0).toNumber(true);
        if (object.persistedQueryMisses != null)
            if ($util.Long)
                (message.persistedQueryMisses = $util.Long.fromValue(object.persistedQueryMisses)).unsigned = true;
            else if (typeof object.persistedQueryMisses === "string")
                message.persistedQueryMisses = parseInt(object.persistedQueryMisses, 10);
            else if (typeof object.persistedQueryMisses === "number")
                message.persistedQueryMisses = object.persistedQueryMisses;
            else if (typeof object.persistedQueryMisses === "object")
                message.persistedQueryMisses = new $util.LongBits(object.persistedQueryMisses.low >>> 0, object.persistedQueryMisses.high >>> 0).toNumber(true);
        if (object.cacheLatencyCount) {
            if (!Array.isArray(object.cacheLatencyCount))
                throw TypeError(".QueryLatencyStats.cacheLatencyCount: array expected");
            message.cacheLatencyCount = [];
            for (var i = 0; i < object.cacheLatencyCount.length; ++i)
                if ($util.Long)
                    (message.cacheLatencyCount[i] = $util.Long.fromValue(object.cacheLatencyCount[i])).unsigned = false;
                else if (typeof object.cacheLatencyCount[i] === "string")
                    message.cacheLatencyCount[i] = parseInt(object.cacheLatencyCount[i], 10);
                else if (typeof object.cacheLatencyCount[i] === "number")
                    message.cacheLatencyCount[i] = object.cacheLatencyCount[i];
                else if (typeof object.cacheLatencyCount[i] === "object")
                    message.cacheLatencyCount[i] = new $util.LongBits(object.cacheLatencyCount[i].low >>> 0, object.cacheLatencyCount[i].high >>> 0).toNumber();
        }
        if (object.rootErrorStats != null) {
            if (typeof object.rootErrorStats !== "object")
                throw TypeError(".QueryLatencyStats.rootErrorStats: object expected");
            message.rootErrorStats = $root.PathErrorStats.fromObject(object.rootErrorStats);
        }
        if (object.requestsWithErrorsCount != null)
            if ($util.Long)
                (message.requestsWithErrorsCount = $util.Long.fromValue(object.requestsWithErrorsCount)).unsigned = true;
            else if (typeof object.requestsWithErrorsCount === "string")
                message.requestsWithErrorsCount = parseInt(object.requestsWithErrorsCount, 10);
            else if (typeof object.requestsWithErrorsCount === "number")
                message.requestsWithErrorsCount = object.requestsWithErrorsCount;
            else if (typeof object.requestsWithErrorsCount === "object")
                message.requestsWithErrorsCount = new $util.LongBits(object.requestsWithErrorsCount.low >>> 0, object.requestsWithErrorsCount.high >>> 0).toNumber(true);
        if (object.publicCacheTtlCount) {
            if (!Array.isArray(object.publicCacheTtlCount))
                throw TypeError(".QueryLatencyStats.publicCacheTtlCount: array expected");
            message.publicCacheTtlCount = [];
            for (var i = 0; i < object.publicCacheTtlCount.length; ++i)
                if ($util.Long)
                    (message.publicCacheTtlCount[i] = $util.Long.fromValue(object.publicCacheTtlCount[i])).unsigned = false;
                else if (typeof object.publicCacheTtlCount[i] === "string")
                    message.publicCacheTtlCount[i] = parseInt(object.publicCacheTtlCount[i], 10);
                else if (typeof object.publicCacheTtlCount[i] === "number")
                    message.publicCacheTtlCount[i] = object.publicCacheTtlCount[i];
                else if (typeof object.publicCacheTtlCount[i] === "object")
                    message.publicCacheTtlCount[i] = new $util.LongBits(object.publicCacheTtlCount[i].low >>> 0, object.publicCacheTtlCount[i].high >>> 0).toNumber();
        }
        if (object.privateCacheTtlCount) {
            if (!Array.isArray(object.privateCacheTtlCount))
                throw TypeError(".QueryLatencyStats.privateCacheTtlCount: array expected");
            message.privateCacheTtlCount = [];
            for (var i = 0; i < object.privateCacheTtlCount.length; ++i)
                if ($util.Long)
                    (message.privateCacheTtlCount[i] = $util.Long.fromValue(object.privateCacheTtlCount[i])).unsigned = false;
                else if (typeof object.privateCacheTtlCount[i] === "string")
                    message.privateCacheTtlCount[i] = parseInt(object.privateCacheTtlCount[i], 10);
                else if (typeof object.privateCacheTtlCount[i] === "number")
                    message.privateCacheTtlCount[i] = object.privateCacheTtlCount[i];
                else if (typeof object.privateCacheTtlCount[i] === "object")
                    message.privateCacheTtlCount[i] = new $util.LongBits(object.privateCacheTtlCount[i].low >>> 0, object.privateCacheTtlCount[i].high >>> 0).toNumber();
        }
        if (object.registeredOperationCount != null)
            if ($util.Long)
                (message.registeredOperationCount = $util.Long.fromValue(object.registeredOperationCount)).unsigned = true;
            else if (typeof object.registeredOperationCount === "string")
                message.registeredOperationCount = parseInt(object.registeredOperationCount, 10);
            else if (typeof object.registeredOperationCount === "number")
                message.registeredOperationCount = object.registeredOperationCount;
            else if (typeof object.registeredOperationCount === "object")
                message.registeredOperationCount = new $util.LongBits(object.registeredOperationCount.low >>> 0, object.registeredOperationCount.high >>> 0).toNumber(true);
        if (object.forbiddenOperationCount != null)
            if ($util.Long)
                (message.forbiddenOperationCount = $util.Long.fromValue(object.forbiddenOperationCount)).unsigned = true;
            else if (typeof object.forbiddenOperationCount === "string")
                message.forbiddenOperationCount = parseInt(object.forbiddenOperationCount, 10);
            else if (typeof object.forbiddenOperationCount === "number")
                message.forbiddenOperationCount = object.forbiddenOperationCount;
            else if (typeof object.forbiddenOperationCount === "object")
                message.forbiddenOperationCount = new $util.LongBits(object.forbiddenOperationCount.low >>> 0, object.forbiddenOperationCount.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a QueryLatencyStats message. Also converts values to other types if specified.
     * @function toObject
     * @memberof QueryLatencyStats
     * @static
     * @param {QueryLatencyStats} message QueryLatencyStats
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    QueryLatencyStats.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.latencyCount = [];
            object.cacheLatencyCount = [];
            object.publicCacheTtlCount = [];
            object.privateCacheTtlCount = [];
        }
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.requestCount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.requestCount = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.cacheHits = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.cacheHits = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.persistedQueryHits = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.persistedQueryHits = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.persistedQueryMisses = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.persistedQueryMisses = options.longs === String ? "0" : 0;
            object.rootErrorStats = null;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.requestsWithErrorsCount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.requestsWithErrorsCount = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.registeredOperationCount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.registeredOperationCount = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.forbiddenOperationCount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.forbiddenOperationCount = options.longs === String ? "0" : 0;
        }
        if (message.latencyCount && message.latencyCount.length) {
            object.latencyCount = [];
            for (var j = 0; j < message.latencyCount.length; ++j)
                if (typeof message.latencyCount[j] === "number")
                    object.latencyCount[j] = options.longs === String ? String(message.latencyCount[j]) : message.latencyCount[j];
                else
                    object.latencyCount[j] = options.longs === String ? $util.Long.prototype.toString.call(message.latencyCount[j]) : options.longs === Number ? new $util.LongBits(message.latencyCount[j].low >>> 0, message.latencyCount[j].high >>> 0).toNumber() : message.latencyCount[j];
        }
        if (message.requestCount != null && message.hasOwnProperty("requestCount"))
            if (typeof message.requestCount === "number")
                object.requestCount = options.longs === String ? String(message.requestCount) : message.requestCount;
            else
                object.requestCount = options.longs === String ? $util.Long.prototype.toString.call(message.requestCount) : options.longs === Number ? new $util.LongBits(message.requestCount.low >>> 0, message.requestCount.high >>> 0).toNumber(true) : message.requestCount;
        if (message.cacheHits != null && message.hasOwnProperty("cacheHits"))
            if (typeof message.cacheHits === "number")
                object.cacheHits = options.longs === String ? String(message.cacheHits) : message.cacheHits;
            else
                object.cacheHits = options.longs === String ? $util.Long.prototype.toString.call(message.cacheHits) : options.longs === Number ? new $util.LongBits(message.cacheHits.low >>> 0, message.cacheHits.high >>> 0).toNumber(true) : message.cacheHits;
        if (message.persistedQueryHits != null && message.hasOwnProperty("persistedQueryHits"))
            if (typeof message.persistedQueryHits === "number")
                object.persistedQueryHits = options.longs === String ? String(message.persistedQueryHits) : message.persistedQueryHits;
            else
                object.persistedQueryHits = options.longs === String ? $util.Long.prototype.toString.call(message.persistedQueryHits) : options.longs === Number ? new $util.LongBits(message.persistedQueryHits.low >>> 0, message.persistedQueryHits.high >>> 0).toNumber(true) : message.persistedQueryHits;
        if (message.persistedQueryMisses != null && message.hasOwnProperty("persistedQueryMisses"))
            if (typeof message.persistedQueryMisses === "number")
                object.persistedQueryMisses = options.longs === String ? String(message.persistedQueryMisses) : message.persistedQueryMisses;
            else
                object.persistedQueryMisses = options.longs === String ? $util.Long.prototype.toString.call(message.persistedQueryMisses) : options.longs === Number ? new $util.LongBits(message.persistedQueryMisses.low >>> 0, message.persistedQueryMisses.high >>> 0).toNumber(true) : message.persistedQueryMisses;
        if (message.cacheLatencyCount && message.cacheLatencyCount.length) {
            object.cacheLatencyCount = [];
            for (var j = 0; j < message.cacheLatencyCount.length; ++j)
                if (typeof message.cacheLatencyCount[j] === "number")
                    object.cacheLatencyCount[j] = options.longs === String ? String(message.cacheLatencyCount[j]) : message.cacheLatencyCount[j];
                else
                    object.cacheLatencyCount[j] = options.longs === String ? $util.Long.prototype.toString.call(message.cacheLatencyCount[j]) : options.longs === Number ? new $util.LongBits(message.cacheLatencyCount[j].low >>> 0, message.cacheLatencyCount[j].high >>> 0).toNumber() : message.cacheLatencyCount[j];
        }
        if (message.rootErrorStats != null && message.hasOwnProperty("rootErrorStats"))
            object.rootErrorStats = $root.PathErrorStats.toObject(message.rootErrorStats, options);
        if (message.requestsWithErrorsCount != null && message.hasOwnProperty("requestsWithErrorsCount"))
            if (typeof message.requestsWithErrorsCount === "number")
                object.requestsWithErrorsCount = options.longs === String ? String(message.requestsWithErrorsCount) : message.requestsWithErrorsCount;
            else
                object.requestsWithErrorsCount = options.longs === String ? $util.Long.prototype.toString.call(message.requestsWithErrorsCount) : options.longs === Number ? new $util.LongBits(message.requestsWithErrorsCount.low >>> 0, message.requestsWithErrorsCount.high >>> 0).toNumber(true) : message.requestsWithErrorsCount;
        if (message.publicCacheTtlCount && message.publicCacheTtlCount.length) {
            object.publicCacheTtlCount = [];
            for (var j = 0; j < message.publicCacheTtlCount.length; ++j)
                if (typeof message.publicCacheTtlCount[j] === "number")
                    object.publicCacheTtlCount[j] = options.longs === String ? String(message.publicCacheTtlCount[j]) : message.publicCacheTtlCount[j];
                else
                    object.publicCacheTtlCount[j] = options.longs === String ? $util.Long.prototype.toString.call(message.publicCacheTtlCount[j]) : options.longs === Number ? new $util.LongBits(message.publicCacheTtlCount[j].low >>> 0, message.publicCacheTtlCount[j].high >>> 0).toNumber() : message.publicCacheTtlCount[j];
        }
        if (message.privateCacheTtlCount && message.privateCacheTtlCount.length) {
            object.privateCacheTtlCount = [];
            for (var j = 0; j < message.privateCacheTtlCount.length; ++j)
                if (typeof message.privateCacheTtlCount[j] === "number")
                    object.privateCacheTtlCount[j] = options.longs === String ? String(message.privateCacheTtlCount[j]) : message.privateCacheTtlCount[j];
                else
                    object.privateCacheTtlCount[j] = options.longs === String ? $util.Long.prototype.toString.call(message.privateCacheTtlCount[j]) : options.longs === Number ? new $util.LongBits(message.privateCacheTtlCount[j].low >>> 0, message.privateCacheTtlCount[j].high >>> 0).toNumber() : message.privateCacheTtlCount[j];
        }
        if (message.registeredOperationCount != null && message.hasOwnProperty("registeredOperationCount"))
            if (typeof message.registeredOperationCount === "number")
                object.registeredOperationCount = options.longs === String ? String(message.registeredOperationCount) : message.registeredOperationCount;
            else
                object.registeredOperationCount = options.longs === String ? $util.Long.prototype.toString.call(message.registeredOperationCount) : options.longs === Number ? new $util.LongBits(message.registeredOperationCount.low >>> 0, message.registeredOperationCount.high >>> 0).toNumber(true) : message.registeredOperationCount;
        if (message.forbiddenOperationCount != null && message.hasOwnProperty("forbiddenOperationCount"))
            if (typeof message.forbiddenOperationCount === "number")
                object.forbiddenOperationCount = options.longs === String ? String(message.forbiddenOperationCount) : message.forbiddenOperationCount;
            else
                object.forbiddenOperationCount = options.longs === String ? $util.Long.prototype.toString.call(message.forbiddenOperationCount) : options.longs === Number ? new $util.LongBits(message.forbiddenOperationCount.low >>> 0, message.forbiddenOperationCount.high >>> 0).toNumber(true) : message.forbiddenOperationCount;
        return object;
    };

    /**
     * Converts this QueryLatencyStats to JSON.
     * @function toJSON
     * @memberof QueryLatencyStats
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    QueryLatencyStats.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return QueryLatencyStats;
})();

$root.StatsContext = (function() {

    /**
     * Properties of a StatsContext.
     * @exports IStatsContext
     * @interface IStatsContext
     * @property {string|null} [clientReferenceId] StatsContext clientReferenceId
     * @property {string|null} [clientName] StatsContext clientName
     * @property {string|null} [clientVersion] StatsContext clientVersion
     */

    /**
     * Constructs a new StatsContext.
     * @exports StatsContext
     * @classdesc Represents a StatsContext.
     * @implements IStatsContext
     * @constructor
     * @param {IStatsContext=} [properties] Properties to set
     */
    function StatsContext(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * StatsContext clientReferenceId.
     * @member {string} clientReferenceId
     * @memberof StatsContext
     * @instance
     */
    StatsContext.prototype.clientReferenceId = "";

    /**
     * StatsContext clientName.
     * @member {string} clientName
     * @memberof StatsContext
     * @instance
     */
    StatsContext.prototype.clientName = "";

    /**
     * StatsContext clientVersion.
     * @member {string} clientVersion
     * @memberof StatsContext
     * @instance
     */
    StatsContext.prototype.clientVersion = "";

    /**
     * Creates a new StatsContext instance using the specified properties.
     * @function create
     * @memberof StatsContext
     * @static
     * @param {IStatsContext=} [properties] Properties to set
     * @returns {StatsContext} StatsContext instance
     */
    StatsContext.create = function create(properties) {
        return new StatsContext(properties);
    };

    /**
     * Encodes the specified StatsContext message. Does not implicitly {@link StatsContext.verify|verify} messages.
     * @function encode
     * @memberof StatsContext
     * @static
     * @param {IStatsContext} message StatsContext message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StatsContext.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.clientReferenceId != null && Object.hasOwnProperty.call(message, "clientReferenceId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.clientReferenceId);
        if (message.clientName != null && Object.hasOwnProperty.call(message, "clientName"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.clientName);
        if (message.clientVersion != null && Object.hasOwnProperty.call(message, "clientVersion"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.clientVersion);
        return writer;
    };

    /**
     * Encodes the specified StatsContext message, length delimited. Does not implicitly {@link StatsContext.verify|verify} messages.
     * @function encodeDelimited
     * @memberof StatsContext
     * @static
     * @param {IStatsContext} message StatsContext message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StatsContext.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a StatsContext message from the specified reader or buffer.
     * @function decode
     * @memberof StatsContext
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {StatsContext} StatsContext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StatsContext.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StatsContext();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.clientReferenceId = reader.string();
                break;
            case 2:
                message.clientName = reader.string();
                break;
            case 3:
                message.clientVersion = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a StatsContext message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof StatsContext
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {StatsContext} StatsContext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StatsContext.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a StatsContext message.
     * @function verify
     * @memberof StatsContext
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    StatsContext.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.clientReferenceId != null && message.hasOwnProperty("clientReferenceId"))
            if (!$util.isString(message.clientReferenceId))
                return "clientReferenceId: string expected";
        if (message.clientName != null && message.hasOwnProperty("clientName"))
            if (!$util.isString(message.clientName))
                return "clientName: string expected";
        if (message.clientVersion != null && message.hasOwnProperty("clientVersion"))
            if (!$util.isString(message.clientVersion))
                return "clientVersion: string expected";
        return null;
    };

    /**
     * Creates a StatsContext message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof StatsContext
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {StatsContext} StatsContext
     */
    StatsContext.fromObject = function fromObject(object) {
        if (object instanceof $root.StatsContext)
            return object;
        var message = new $root.StatsContext();
        if (object.clientReferenceId != null)
            message.clientReferenceId = String(object.clientReferenceId);
        if (object.clientName != null)
            message.clientName = String(object.clientName);
        if (object.clientVersion != null)
            message.clientVersion = String(object.clientVersion);
        return message;
    };

    /**
     * Creates a plain object from a StatsContext message. Also converts values to other types if specified.
     * @function toObject
     * @memberof StatsContext
     * @static
     * @param {StatsContext} message StatsContext
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    StatsContext.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.clientReferenceId = "";
            object.clientName = "";
            object.clientVersion = "";
        }
        if (message.clientReferenceId != null && message.hasOwnProperty("clientReferenceId"))
            object.clientReferenceId = message.clientReferenceId;
        if (message.clientName != null && message.hasOwnProperty("clientName"))
            object.clientName = message.clientName;
        if (message.clientVersion != null && message.hasOwnProperty("clientVersion"))
            object.clientVersion = message.clientVersion;
        return object;
    };

    /**
     * Converts this StatsContext to JSON.
     * @function toJSON
     * @memberof StatsContext
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    StatsContext.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return StatsContext;
})();

$root.ContextualizedQueryLatencyStats = (function() {

    /**
     * Properties of a ContextualizedQueryLatencyStats.
     * @exports IContextualizedQueryLatencyStats
     * @interface IContextualizedQueryLatencyStats
     * @property {IQueryLatencyStats|null} [queryLatencyStats] ContextualizedQueryLatencyStats queryLatencyStats
     * @property {IStatsContext|null} [context] ContextualizedQueryLatencyStats context
     */

    /**
     * Constructs a new ContextualizedQueryLatencyStats.
     * @exports ContextualizedQueryLatencyStats
     * @classdesc Represents a ContextualizedQueryLatencyStats.
     * @implements IContextualizedQueryLatencyStats
     * @constructor
     * @param {IContextualizedQueryLatencyStats=} [properties] Properties to set
     */
    function ContextualizedQueryLatencyStats(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ContextualizedQueryLatencyStats queryLatencyStats.
     * @member {IQueryLatencyStats|null|undefined} queryLatencyStats
     * @memberof ContextualizedQueryLatencyStats
     * @instance
     */
    ContextualizedQueryLatencyStats.prototype.queryLatencyStats = null;

    /**
     * ContextualizedQueryLatencyStats context.
     * @member {IStatsContext|null|undefined} context
     * @memberof ContextualizedQueryLatencyStats
     * @instance
     */
    ContextualizedQueryLatencyStats.prototype.context = null;

    /**
     * Creates a new ContextualizedQueryLatencyStats instance using the specified properties.
     * @function create
     * @memberof ContextualizedQueryLatencyStats
     * @static
     * @param {IContextualizedQueryLatencyStats=} [properties] Properties to set
     * @returns {ContextualizedQueryLatencyStats} ContextualizedQueryLatencyStats instance
     */
    ContextualizedQueryLatencyStats.create = function create(properties) {
        return new ContextualizedQueryLatencyStats(properties);
    };

    /**
     * Encodes the specified ContextualizedQueryLatencyStats message. Does not implicitly {@link ContextualizedQueryLatencyStats.verify|verify} messages.
     * @function encode
     * @memberof ContextualizedQueryLatencyStats
     * @static
     * @param {IContextualizedQueryLatencyStats} message ContextualizedQueryLatencyStats message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ContextualizedQueryLatencyStats.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.queryLatencyStats != null && Object.hasOwnProperty.call(message, "queryLatencyStats"))
            $root.QueryLatencyStats.encode(message.queryLatencyStats, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.context != null && Object.hasOwnProperty.call(message, "context"))
            $root.StatsContext.encode(message.context, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ContextualizedQueryLatencyStats message, length delimited. Does not implicitly {@link ContextualizedQueryLatencyStats.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ContextualizedQueryLatencyStats
     * @static
     * @param {IContextualizedQueryLatencyStats} message ContextualizedQueryLatencyStats message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ContextualizedQueryLatencyStats.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ContextualizedQueryLatencyStats message from the specified reader or buffer.
     * @function decode
     * @memberof ContextualizedQueryLatencyStats
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ContextualizedQueryLatencyStats} ContextualizedQueryLatencyStats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ContextualizedQueryLatencyStats.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ContextualizedQueryLatencyStats();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.queryLatencyStats = $root.QueryLatencyStats.decode(reader, reader.uint32());
                break;
            case 2:
                message.context = $root.StatsContext.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ContextualizedQueryLatencyStats message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ContextualizedQueryLatencyStats
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ContextualizedQueryLatencyStats} ContextualizedQueryLatencyStats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ContextualizedQueryLatencyStats.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ContextualizedQueryLatencyStats message.
     * @function verify
     * @memberof ContextualizedQueryLatencyStats
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ContextualizedQueryLatencyStats.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.queryLatencyStats != null && message.hasOwnProperty("queryLatencyStats")) {
            var error = $root.QueryLatencyStats.verify(message.queryLatencyStats);
            if (error)
                return "queryLatencyStats." + error;
        }
        if (message.context != null && message.hasOwnProperty("context")) {
            var error = $root.StatsContext.verify(message.context);
            if (error)
                return "context." + error;
        }
        return null;
    };

    /**
     * Creates a ContextualizedQueryLatencyStats message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ContextualizedQueryLatencyStats
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ContextualizedQueryLatencyStats} ContextualizedQueryLatencyStats
     */
    ContextualizedQueryLatencyStats.fromObject = function fromObject(object) {
        if (object instanceof $root.ContextualizedQueryLatencyStats)
            return object;
        var message = new $root.ContextualizedQueryLatencyStats();
        if (object.queryLatencyStats != null) {
            if (typeof object.queryLatencyStats !== "object")
                throw TypeError(".ContextualizedQueryLatencyStats.queryLatencyStats: object expected");
            message.queryLatencyStats = $root.QueryLatencyStats.fromObject(object.queryLatencyStats);
        }
        if (object.context != null) {
            if (typeof object.context !== "object")
                throw TypeError(".ContextualizedQueryLatencyStats.context: object expected");
            message.context = $root.StatsContext.fromObject(object.context);
        }
        return message;
    };

    /**
     * Creates a plain object from a ContextualizedQueryLatencyStats message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ContextualizedQueryLatencyStats
     * @static
     * @param {ContextualizedQueryLatencyStats} message ContextualizedQueryLatencyStats
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ContextualizedQueryLatencyStats.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.queryLatencyStats = null;
            object.context = null;
        }
        if (message.queryLatencyStats != null && message.hasOwnProperty("queryLatencyStats"))
            object.queryLatencyStats = $root.QueryLatencyStats.toObject(message.queryLatencyStats, options);
        if (message.context != null && message.hasOwnProperty("context"))
            object.context = $root.StatsContext.toObject(message.context, options);
        return object;
    };

    /**
     * Converts this ContextualizedQueryLatencyStats to JSON.
     * @function toJSON
     * @memberof ContextualizedQueryLatencyStats
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ContextualizedQueryLatencyStats.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ContextualizedQueryLatencyStats;
})();

$root.ContextualizedTypeStats = (function() {

    /**
     * Properties of a ContextualizedTypeStats.
     * @exports IContextualizedTypeStats
     * @interface IContextualizedTypeStats
     * @property {IStatsContext|null} [context] ContextualizedTypeStats context
     * @property {Object.<string,ITypeStat>|null} [perTypeStat] ContextualizedTypeStats perTypeStat
     */

    /**
     * Constructs a new ContextualizedTypeStats.
     * @exports ContextualizedTypeStats
     * @classdesc Represents a ContextualizedTypeStats.
     * @implements IContextualizedTypeStats
     * @constructor
     * @param {IContextualizedTypeStats=} [properties] Properties to set
     */
    function ContextualizedTypeStats(properties) {
        this.perTypeStat = {};
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ContextualizedTypeStats context.
     * @member {IStatsContext|null|undefined} context
     * @memberof ContextualizedTypeStats
     * @instance
     */
    ContextualizedTypeStats.prototype.context = null;

    /**
     * ContextualizedTypeStats perTypeStat.
     * @member {Object.<string,ITypeStat>} perTypeStat
     * @memberof ContextualizedTypeStats
     * @instance
     */
    ContextualizedTypeStats.prototype.perTypeStat = $util.emptyObject;

    /**
     * Creates a new ContextualizedTypeStats instance using the specified properties.
     * @function create
     * @memberof ContextualizedTypeStats
     * @static
     * @param {IContextualizedTypeStats=} [properties] Properties to set
     * @returns {ContextualizedTypeStats} ContextualizedTypeStats instance
     */
    ContextualizedTypeStats.create = function create(properties) {
        return new ContextualizedTypeStats(properties);
    };

    /**
     * Encodes the specified ContextualizedTypeStats message. Does not implicitly {@link ContextualizedTypeStats.verify|verify} messages.
     * @function encode
     * @memberof ContextualizedTypeStats
     * @static
     * @param {IContextualizedTypeStats} message ContextualizedTypeStats message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ContextualizedTypeStats.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.context != null && Object.hasOwnProperty.call(message, "context"))
            $root.StatsContext.encode(message.context, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.perTypeStat != null && Object.hasOwnProperty.call(message, "perTypeStat"))
            for (var keys = Object.keys(message.perTypeStat), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                $root.TypeStat.encode(message.perTypeStat[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        return writer;
    };

    /**
     * Encodes the specified ContextualizedTypeStats message, length delimited. Does not implicitly {@link ContextualizedTypeStats.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ContextualizedTypeStats
     * @static
     * @param {IContextualizedTypeStats} message ContextualizedTypeStats message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ContextualizedTypeStats.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ContextualizedTypeStats message from the specified reader or buffer.
     * @function decode
     * @memberof ContextualizedTypeStats
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ContextualizedTypeStats} ContextualizedTypeStats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ContextualizedTypeStats.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ContextualizedTypeStats(), key;
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.context = $root.StatsContext.decode(reader, reader.uint32());
                break;
            case 2:
                reader.skip().pos++;
                if (message.perTypeStat === $util.emptyObject)
                    message.perTypeStat = {};
                key = reader.string();
                reader.pos++;
                message.perTypeStat[key] = $root.TypeStat.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ContextualizedTypeStats message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ContextualizedTypeStats
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ContextualizedTypeStats} ContextualizedTypeStats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ContextualizedTypeStats.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ContextualizedTypeStats message.
     * @function verify
     * @memberof ContextualizedTypeStats
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ContextualizedTypeStats.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.context != null && message.hasOwnProperty("context")) {
            var error = $root.StatsContext.verify(message.context);
            if (error)
                return "context." + error;
        }
        if (message.perTypeStat != null && message.hasOwnProperty("perTypeStat")) {
            if (!$util.isObject(message.perTypeStat))
                return "perTypeStat: object expected";
            var key = Object.keys(message.perTypeStat);
            for (var i = 0; i < key.length; ++i) {
                var error = $root.TypeStat.verify(message.perTypeStat[key[i]]);
                if (error)
                    return "perTypeStat." + error;
            }
        }
        return null;
    };

    /**
     * Creates a ContextualizedTypeStats message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ContextualizedTypeStats
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ContextualizedTypeStats} ContextualizedTypeStats
     */
    ContextualizedTypeStats.fromObject = function fromObject(object) {
        if (object instanceof $root.ContextualizedTypeStats)
            return object;
        var message = new $root.ContextualizedTypeStats();
        if (object.context != null) {
            if (typeof object.context !== "object")
                throw TypeError(".ContextualizedTypeStats.context: object expected");
            message.context = $root.StatsContext.fromObject(object.context);
        }
        if (object.perTypeStat) {
            if (typeof object.perTypeStat !== "object")
                throw TypeError(".ContextualizedTypeStats.perTypeStat: object expected");
            message.perTypeStat = {};
            for (var keys = Object.keys(object.perTypeStat), i = 0; i < keys.length; ++i) {
                if (typeof object.perTypeStat[keys[i]] !== "object")
                    throw TypeError(".ContextualizedTypeStats.perTypeStat: object expected");
                message.perTypeStat[keys[i]] = $root.TypeStat.fromObject(object.perTypeStat[keys[i]]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a ContextualizedTypeStats message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ContextualizedTypeStats
     * @static
     * @param {ContextualizedTypeStats} message ContextualizedTypeStats
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ContextualizedTypeStats.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.objects || options.defaults)
            object.perTypeStat = {};
        if (options.defaults)
            object.context = null;
        if (message.context != null && message.hasOwnProperty("context"))
            object.context = $root.StatsContext.toObject(message.context, options);
        var keys2;
        if (message.perTypeStat && (keys2 = Object.keys(message.perTypeStat)).length) {
            object.perTypeStat = {};
            for (var j = 0; j < keys2.length; ++j)
                object.perTypeStat[keys2[j]] = $root.TypeStat.toObject(message.perTypeStat[keys2[j]], options);
        }
        return object;
    };

    /**
     * Converts this ContextualizedTypeStats to JSON.
     * @function toJSON
     * @memberof ContextualizedTypeStats
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ContextualizedTypeStats.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ContextualizedTypeStats;
})();

$root.FieldStat = (function() {

    /**
     * Properties of a FieldStat.
     * @exports IFieldStat
     * @interface IFieldStat
     * @property {string|null} [name] FieldStat name
     * @property {string|null} [returnType] FieldStat returnType
     * @property {number|null} [errorsCount] FieldStat errorsCount
     * @property {number|null} [count] FieldStat count
     * @property {number|null} [requestsWithErrorsCount] FieldStat requestsWithErrorsCount
     * @property {Array.<number>|null} [latencyCount] FieldStat latencyCount
     */

    /**
     * Constructs a new FieldStat.
     * @exports FieldStat
     * @classdesc Represents a FieldStat.
     * @implements IFieldStat
     * @constructor
     * @param {IFieldStat=} [properties] Properties to set
     */
    function FieldStat(properties) {
        this.latencyCount = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FieldStat name.
     * @member {string} name
     * @memberof FieldStat
     * @instance
     */
    FieldStat.prototype.name = "";

    /**
     * FieldStat returnType.
     * @member {string} returnType
     * @memberof FieldStat
     * @instance
     */
    FieldStat.prototype.returnType = "";

    /**
     * FieldStat errorsCount.
     * @member {number} errorsCount
     * @memberof FieldStat
     * @instance
     */
    FieldStat.prototype.errorsCount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * FieldStat count.
     * @member {number} count
     * @memberof FieldStat
     * @instance
     */
    FieldStat.prototype.count = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * FieldStat requestsWithErrorsCount.
     * @member {number} requestsWithErrorsCount
     * @memberof FieldStat
     * @instance
     */
    FieldStat.prototype.requestsWithErrorsCount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * FieldStat latencyCount.
     * @member {Array.<number>} latencyCount
     * @memberof FieldStat
     * @instance
     */
    FieldStat.prototype.latencyCount = $util.emptyArray;

    /**
     * Creates a new FieldStat instance using the specified properties.
     * @function create
     * @memberof FieldStat
     * @static
     * @param {IFieldStat=} [properties] Properties to set
     * @returns {FieldStat} FieldStat instance
     */
    FieldStat.create = function create(properties) {
        return new FieldStat(properties);
    };

    /**
     * Encodes the specified FieldStat message. Does not implicitly {@link FieldStat.verify|verify} messages.
     * @function encode
     * @memberof FieldStat
     * @static
     * @param {IFieldStat} message FieldStat message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FieldStat.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        if (message.returnType != null && Object.hasOwnProperty.call(message, "returnType"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.returnType);
        if (message.errorsCount != null && Object.hasOwnProperty.call(message, "errorsCount"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.errorsCount);
        if (message.count != null && Object.hasOwnProperty.call(message, "count"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.count);
        if (message.requestsWithErrorsCount != null && Object.hasOwnProperty.call(message, "requestsWithErrorsCount"))
            writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.requestsWithErrorsCount);
        if (message.latencyCount != null && message.latencyCount.length) {
            writer.uint32(/* id 8, wireType 2 =*/66).fork();
            for (var i = 0; i < message.latencyCount.length; ++i)
                writer.int64(message.latencyCount[i]);
            writer.ldelim();
        }
        return writer;
    };

    /**
     * Encodes the specified FieldStat message, length delimited. Does not implicitly {@link FieldStat.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FieldStat
     * @static
     * @param {IFieldStat} message FieldStat message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FieldStat.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a FieldStat message from the specified reader or buffer.
     * @function decode
     * @memberof FieldStat
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FieldStat} FieldStat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FieldStat.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FieldStat();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 2:
                message.name = reader.string();
                break;
            case 3:
                message.returnType = reader.string();
                break;
            case 4:
                message.errorsCount = reader.uint64();
                break;
            case 5:
                message.count = reader.uint64();
                break;
            case 6:
                message.requestsWithErrorsCount = reader.uint64();
                break;
            case 8:
                if (!(message.latencyCount && message.latencyCount.length))
                    message.latencyCount = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.latencyCount.push(reader.int64());
                } else
                    message.latencyCount.push(reader.int64());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a FieldStat message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FieldStat
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FieldStat} FieldStat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FieldStat.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FieldStat message.
     * @function verify
     * @memberof FieldStat
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FieldStat.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.returnType != null && message.hasOwnProperty("returnType"))
            if (!$util.isString(message.returnType))
                return "returnType: string expected";
        if (message.errorsCount != null && message.hasOwnProperty("errorsCount"))
            if (!$util.isInteger(message.errorsCount) && !(message.errorsCount && $util.isInteger(message.errorsCount.low) && $util.isInteger(message.errorsCount.high)))
                return "errorsCount: integer|Long expected";
        if (message.count != null && message.hasOwnProperty("count"))
            if (!$util.isInteger(message.count) && !(message.count && $util.isInteger(message.count.low) && $util.isInteger(message.count.high)))
                return "count: integer|Long expected";
        if (message.requestsWithErrorsCount != null && message.hasOwnProperty("requestsWithErrorsCount"))
            if (!$util.isInteger(message.requestsWithErrorsCount) && !(message.requestsWithErrorsCount && $util.isInteger(message.requestsWithErrorsCount.low) && $util.isInteger(message.requestsWithErrorsCount.high)))
                return "requestsWithErrorsCount: integer|Long expected";
        if (message.latencyCount != null && message.hasOwnProperty("latencyCount")) {
            if (!Array.isArray(message.latencyCount))
                return "latencyCount: array expected";
            for (var i = 0; i < message.latencyCount.length; ++i)
                if (!$util.isInteger(message.latencyCount[i]) && !(message.latencyCount[i] && $util.isInteger(message.latencyCount[i].low) && $util.isInteger(message.latencyCount[i].high)))
                    return "latencyCount: integer|Long[] expected";
        }
        return null;
    };

    /**
     * Creates a FieldStat message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FieldStat
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FieldStat} FieldStat
     */
    FieldStat.fromObject = function fromObject(object) {
        if (object instanceof $root.FieldStat)
            return object;
        var message = new $root.FieldStat();
        if (object.name != null)
            message.name = String(object.name);
        if (object.returnType != null)
            message.returnType = String(object.returnType);
        if (object.errorsCount != null)
            if ($util.Long)
                (message.errorsCount = $util.Long.fromValue(object.errorsCount)).unsigned = true;
            else if (typeof object.errorsCount === "string")
                message.errorsCount = parseInt(object.errorsCount, 10);
            else if (typeof object.errorsCount === "number")
                message.errorsCount = object.errorsCount;
            else if (typeof object.errorsCount === "object")
                message.errorsCount = new $util.LongBits(object.errorsCount.low >>> 0, object.errorsCount.high >>> 0).toNumber(true);
        if (object.count != null)
            if ($util.Long)
                (message.count = $util.Long.fromValue(object.count)).unsigned = true;
            else if (typeof object.count === "string")
                message.count = parseInt(object.count, 10);
            else if (typeof object.count === "number")
                message.count = object.count;
            else if (typeof object.count === "object")
                message.count = new $util.LongBits(object.count.low >>> 0, object.count.high >>> 0).toNumber(true);
        if (object.requestsWithErrorsCount != null)
            if ($util.Long)
                (message.requestsWithErrorsCount = $util.Long.fromValue(object.requestsWithErrorsCount)).unsigned = true;
            else if (typeof object.requestsWithErrorsCount === "string")
                message.requestsWithErrorsCount = parseInt(object.requestsWithErrorsCount, 10);
            else if (typeof object.requestsWithErrorsCount === "number")
                message.requestsWithErrorsCount = object.requestsWithErrorsCount;
            else if (typeof object.requestsWithErrorsCount === "object")
                message.requestsWithErrorsCount = new $util.LongBits(object.requestsWithErrorsCount.low >>> 0, object.requestsWithErrorsCount.high >>> 0).toNumber(true);
        if (object.latencyCount) {
            if (!Array.isArray(object.latencyCount))
                throw TypeError(".FieldStat.latencyCount: array expected");
            message.latencyCount = [];
            for (var i = 0; i < object.latencyCount.length; ++i)
                if ($util.Long)
                    (message.latencyCount[i] = $util.Long.fromValue(object.latencyCount[i])).unsigned = false;
                else if (typeof object.latencyCount[i] === "string")
                    message.latencyCount[i] = parseInt(object.latencyCount[i], 10);
                else if (typeof object.latencyCount[i] === "number")
                    message.latencyCount[i] = object.latencyCount[i];
                else if (typeof object.latencyCount[i] === "object")
                    message.latencyCount[i] = new $util.LongBits(object.latencyCount[i].low >>> 0, object.latencyCount[i].high >>> 0).toNumber();
        }
        return message;
    };

    /**
     * Creates a plain object from a FieldStat message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FieldStat
     * @static
     * @param {FieldStat} message FieldStat
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FieldStat.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.latencyCount = [];
        if (options.defaults) {
            object.name = "";
            object.returnType = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.errorsCount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.errorsCount = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.count = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.count = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.requestsWithErrorsCount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.requestsWithErrorsCount = options.longs === String ? "0" : 0;
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.returnType != null && message.hasOwnProperty("returnType"))
            object.returnType = message.returnType;
        if (message.errorsCount != null && message.hasOwnProperty("errorsCount"))
            if (typeof message.errorsCount === "number")
                object.errorsCount = options.longs === String ? String(message.errorsCount) : message.errorsCount;
            else
                object.errorsCount = options.longs === String ? $util.Long.prototype.toString.call(message.errorsCount) : options.longs === Number ? new $util.LongBits(message.errorsCount.low >>> 0, message.errorsCount.high >>> 0).toNumber(true) : message.errorsCount;
        if (message.count != null && message.hasOwnProperty("count"))
            if (typeof message.count === "number")
                object.count = options.longs === String ? String(message.count) : message.count;
            else
                object.count = options.longs === String ? $util.Long.prototype.toString.call(message.count) : options.longs === Number ? new $util.LongBits(message.count.low >>> 0, message.count.high >>> 0).toNumber(true) : message.count;
        if (message.requestsWithErrorsCount != null && message.hasOwnProperty("requestsWithErrorsCount"))
            if (typeof message.requestsWithErrorsCount === "number")
                object.requestsWithErrorsCount = options.longs === String ? String(message.requestsWithErrorsCount) : message.requestsWithErrorsCount;
            else
                object.requestsWithErrorsCount = options.longs === String ? $util.Long.prototype.toString.call(message.requestsWithErrorsCount) : options.longs === Number ? new $util.LongBits(message.requestsWithErrorsCount.low >>> 0, message.requestsWithErrorsCount.high >>> 0).toNumber(true) : message.requestsWithErrorsCount;
        if (message.latencyCount && message.latencyCount.length) {
            object.latencyCount = [];
            for (var j = 0; j < message.latencyCount.length; ++j)
                if (typeof message.latencyCount[j] === "number")
                    object.latencyCount[j] = options.longs === String ? String(message.latencyCount[j]) : message.latencyCount[j];
                else
                    object.latencyCount[j] = options.longs === String ? $util.Long.prototype.toString.call(message.latencyCount[j]) : options.longs === Number ? new $util.LongBits(message.latencyCount[j].low >>> 0, message.latencyCount[j].high >>> 0).toNumber() : message.latencyCount[j];
        }
        return object;
    };

    /**
     * Converts this FieldStat to JSON.
     * @function toJSON
     * @memberof FieldStat
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FieldStat.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return FieldStat;
})();

$root.TypeStat = (function() {

    /**
     * Properties of a TypeStat.
     * @exports ITypeStat
     * @interface ITypeStat
     * @property {string|null} [name] TypeStat name
     * @property {Array.<IFieldStat>|null} [field] TypeStat field
     * @property {Object.<string,IFieldStat>|null} [perFieldStat] TypeStat perFieldStat
     */

    /**
     * Constructs a new TypeStat.
     * @exports TypeStat
     * @classdesc Represents a TypeStat.
     * @implements ITypeStat
     * @constructor
     * @param {ITypeStat=} [properties] Properties to set
     */
    function TypeStat(properties) {
        this.field = [];
        this.perFieldStat = {};
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TypeStat name.
     * @member {string} name
     * @memberof TypeStat
     * @instance
     */
    TypeStat.prototype.name = "";

    /**
     * TypeStat field.
     * @member {Array.<IFieldStat>} field
     * @memberof TypeStat
     * @instance
     */
    TypeStat.prototype.field = $util.emptyArray;

    /**
     * TypeStat perFieldStat.
     * @member {Object.<string,IFieldStat>} perFieldStat
     * @memberof TypeStat
     * @instance
     */
    TypeStat.prototype.perFieldStat = $util.emptyObject;

    /**
     * Creates a new TypeStat instance using the specified properties.
     * @function create
     * @memberof TypeStat
     * @static
     * @param {ITypeStat=} [properties] Properties to set
     * @returns {TypeStat} TypeStat instance
     */
    TypeStat.create = function create(properties) {
        return new TypeStat(properties);
    };

    /**
     * Encodes the specified TypeStat message. Does not implicitly {@link TypeStat.verify|verify} messages.
     * @function encode
     * @memberof TypeStat
     * @static
     * @param {ITypeStat} message TypeStat message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TypeStat.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.field != null && message.field.length)
            for (var i = 0; i < message.field.length; ++i)
                $root.FieldStat.encode(message.field[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.perFieldStat != null && Object.hasOwnProperty.call(message, "perFieldStat"))
            for (var keys = Object.keys(message.perFieldStat), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                $root.FieldStat.encode(message.perFieldStat[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        return writer;
    };

    /**
     * Encodes the specified TypeStat message, length delimited. Does not implicitly {@link TypeStat.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TypeStat
     * @static
     * @param {ITypeStat} message TypeStat message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TypeStat.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TypeStat message from the specified reader or buffer.
     * @function decode
     * @memberof TypeStat
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TypeStat} TypeStat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TypeStat.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TypeStat(), key;
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.name = reader.string();
                break;
            case 2:
                if (!(message.field && message.field.length))
                    message.field = [];
                message.field.push($root.FieldStat.decode(reader, reader.uint32()));
                break;
            case 3:
                reader.skip().pos++;
                if (message.perFieldStat === $util.emptyObject)
                    message.perFieldStat = {};
                key = reader.string();
                reader.pos++;
                message.perFieldStat[key] = $root.FieldStat.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TypeStat message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TypeStat
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TypeStat} TypeStat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TypeStat.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TypeStat message.
     * @function verify
     * @memberof TypeStat
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TypeStat.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.field != null && message.hasOwnProperty("field")) {
            if (!Array.isArray(message.field))
                return "field: array expected";
            for (var i = 0; i < message.field.length; ++i) {
                var error = $root.FieldStat.verify(message.field[i]);
                if (error)
                    return "field." + error;
            }
        }
        if (message.perFieldStat != null && message.hasOwnProperty("perFieldStat")) {
            if (!$util.isObject(message.perFieldStat))
                return "perFieldStat: object expected";
            var key = Object.keys(message.perFieldStat);
            for (var i = 0; i < key.length; ++i) {
                var error = $root.FieldStat.verify(message.perFieldStat[key[i]]);
                if (error)
                    return "perFieldStat." + error;
            }
        }
        return null;
    };

    /**
     * Creates a TypeStat message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TypeStat
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TypeStat} TypeStat
     */
    TypeStat.fromObject = function fromObject(object) {
        if (object instanceof $root.TypeStat)
            return object;
        var message = new $root.TypeStat();
        if (object.name != null)
            message.name = String(object.name);
        if (object.field) {
            if (!Array.isArray(object.field))
                throw TypeError(".TypeStat.field: array expected");
            message.field = [];
            for (var i = 0; i < object.field.length; ++i) {
                if (typeof object.field[i] !== "object")
                    throw TypeError(".TypeStat.field: object expected");
                message.field[i] = $root.FieldStat.fromObject(object.field[i]);
            }
        }
        if (object.perFieldStat) {
            if (typeof object.perFieldStat !== "object")
                throw TypeError(".TypeStat.perFieldStat: object expected");
            message.perFieldStat = {};
            for (var keys = Object.keys(object.perFieldStat), i = 0; i < keys.length; ++i) {
                if (typeof object.perFieldStat[keys[i]] !== "object")
                    throw TypeError(".TypeStat.perFieldStat: object expected");
                message.perFieldStat[keys[i]] = $root.FieldStat.fromObject(object.perFieldStat[keys[i]]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a TypeStat message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TypeStat
     * @static
     * @param {TypeStat} message TypeStat
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TypeStat.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.field = [];
        if (options.objects || options.defaults)
            object.perFieldStat = {};
        if (options.defaults)
            object.name = "";
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.field && message.field.length) {
            object.field = [];
            for (var j = 0; j < message.field.length; ++j)
                object.field[j] = $root.FieldStat.toObject(message.field[j], options);
        }
        var keys2;
        if (message.perFieldStat && (keys2 = Object.keys(message.perFieldStat)).length) {
            object.perFieldStat = {};
            for (var j = 0; j < keys2.length; ++j)
                object.perFieldStat[keys2[j]] = $root.FieldStat.toObject(message.perFieldStat[keys2[j]], options);
        }
        return object;
    };

    /**
     * Converts this TypeStat to JSON.
     * @function toJSON
     * @memberof TypeStat
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TypeStat.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return TypeStat;
})();

$root.QueryStats = (function() {

    /**
     * Properties of a QueryStats.
     * @exports IQueryStats
     * @interface IQueryStats
     * @property {Object.<string,IClientNameStats>|null} [perClientName] QueryStats perClientName
     * @property {Array.<IContextualizedQueryLatencyStats>|null} [queryStatsWithContext] QueryStats queryStatsWithContext
     * @property {Array.<ITypeStat>|null} [perType] QueryStats perType
     * @property {Object.<string,ITypeStat>|null} [perTypeStat] QueryStats perTypeStat
     * @property {Array.<IContextualizedTypeStats>|null} [typeStatsWithContext] QueryStats typeStatsWithContext
     */

    /**
     * Constructs a new QueryStats.
     * @exports QueryStats
     * @classdesc Represents a QueryStats.
     * @implements IQueryStats
     * @constructor
     * @param {IQueryStats=} [properties] Properties to set
     */
    function QueryStats(properties) {
        this.perClientName = {};
        this.queryStatsWithContext = [];
        this.perType = [];
        this.perTypeStat = {};
        this.typeStatsWithContext = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * QueryStats perClientName.
     * @member {Object.<string,IClientNameStats>} perClientName
     * @memberof QueryStats
     * @instance
     */
    QueryStats.prototype.perClientName = $util.emptyObject;

    /**
     * QueryStats queryStatsWithContext.
     * @member {Array.<IContextualizedQueryLatencyStats>} queryStatsWithContext
     * @memberof QueryStats
     * @instance
     */
    QueryStats.prototype.queryStatsWithContext = $util.emptyArray;

    /**
     * QueryStats perType.
     * @member {Array.<ITypeStat>} perType
     * @memberof QueryStats
     * @instance
     */
    QueryStats.prototype.perType = $util.emptyArray;

    /**
     * QueryStats perTypeStat.
     * @member {Object.<string,ITypeStat>} perTypeStat
     * @memberof QueryStats
     * @instance
     */
    QueryStats.prototype.perTypeStat = $util.emptyObject;

    /**
     * QueryStats typeStatsWithContext.
     * @member {Array.<IContextualizedTypeStats>} typeStatsWithContext
     * @memberof QueryStats
     * @instance
     */
    QueryStats.prototype.typeStatsWithContext = $util.emptyArray;

    /**
     * Creates a new QueryStats instance using the specified properties.
     * @function create
     * @memberof QueryStats
     * @static
     * @param {IQueryStats=} [properties] Properties to set
     * @returns {QueryStats} QueryStats instance
     */
    QueryStats.create = function create(properties) {
        return new QueryStats(properties);
    };

    /**
     * Encodes the specified QueryStats message. Does not implicitly {@link QueryStats.verify|verify} messages.
     * @function encode
     * @memberof QueryStats
     * @static
     * @param {IQueryStats} message QueryStats message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    QueryStats.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.perClientName != null && Object.hasOwnProperty.call(message, "perClientName"))
            for (var keys = Object.keys(message.perClientName), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                $root.ClientNameStats.encode(message.perClientName[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.perType != null && message.perType.length)
            for (var i = 0; i < message.perType.length; ++i)
                $root.TypeStat.encode(message.perType[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.perTypeStat != null && Object.hasOwnProperty.call(message, "perTypeStat"))
            for (var keys = Object.keys(message.perTypeStat), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                $root.TypeStat.encode(message.perTypeStat[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.queryStatsWithContext != null && message.queryStatsWithContext.length)
            for (var i = 0; i < message.queryStatsWithContext.length; ++i)
                $root.ContextualizedQueryLatencyStats.encode(message.queryStatsWithContext[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.typeStatsWithContext != null && message.typeStatsWithContext.length)
            for (var i = 0; i < message.typeStatsWithContext.length; ++i)
                $root.ContextualizedTypeStats.encode(message.typeStatsWithContext[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified QueryStats message, length delimited. Does not implicitly {@link QueryStats.verify|verify} messages.
     * @function encodeDelimited
     * @memberof QueryStats
     * @static
     * @param {IQueryStats} message QueryStats message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    QueryStats.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a QueryStats message from the specified reader or buffer.
     * @function decode
     * @memberof QueryStats
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {QueryStats} QueryStats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    QueryStats.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.QueryStats(), key;
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                reader.skip().pos++;
                if (message.perClientName === $util.emptyObject)
                    message.perClientName = {};
                key = reader.string();
                reader.pos++;
                message.perClientName[key] = $root.ClientNameStats.decode(reader, reader.uint32());
                break;
            case 4:
                if (!(message.queryStatsWithContext && message.queryStatsWithContext.length))
                    message.queryStatsWithContext = [];
                message.queryStatsWithContext.push($root.ContextualizedQueryLatencyStats.decode(reader, reader.uint32()));
                break;
            case 2:
                if (!(message.perType && message.perType.length))
                    message.perType = [];
                message.perType.push($root.TypeStat.decode(reader, reader.uint32()));
                break;
            case 3:
                reader.skip().pos++;
                if (message.perTypeStat === $util.emptyObject)
                    message.perTypeStat = {};
                key = reader.string();
                reader.pos++;
                message.perTypeStat[key] = $root.TypeStat.decode(reader, reader.uint32());
                break;
            case 5:
                if (!(message.typeStatsWithContext && message.typeStatsWithContext.length))
                    message.typeStatsWithContext = [];
                message.typeStatsWithContext.push($root.ContextualizedTypeStats.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a QueryStats message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof QueryStats
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {QueryStats} QueryStats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    QueryStats.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a QueryStats message.
     * @function verify
     * @memberof QueryStats
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    QueryStats.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.perClientName != null && message.hasOwnProperty("perClientName")) {
            if (!$util.isObject(message.perClientName))
                return "perClientName: object expected";
            var key = Object.keys(message.perClientName);
            for (var i = 0; i < key.length; ++i) {
                var error = $root.ClientNameStats.verify(message.perClientName[key[i]]);
                if (error)
                    return "perClientName." + error;
            }
        }
        if (message.queryStatsWithContext != null && message.hasOwnProperty("queryStatsWithContext")) {
            if (!Array.isArray(message.queryStatsWithContext))
                return "queryStatsWithContext: array expected";
            for (var i = 0; i < message.queryStatsWithContext.length; ++i) {
                var error = $root.ContextualizedQueryLatencyStats.verify(message.queryStatsWithContext[i]);
                if (error)
                    return "queryStatsWithContext." + error;
            }
        }
        if (message.perType != null && message.hasOwnProperty("perType")) {
            if (!Array.isArray(message.perType))
                return "perType: array expected";
            for (var i = 0; i < message.perType.length; ++i) {
                var error = $root.TypeStat.verify(message.perType[i]);
                if (error)
                    return "perType." + error;
            }
        }
        if (message.perTypeStat != null && message.hasOwnProperty("perTypeStat")) {
            if (!$util.isObject(message.perTypeStat))
                return "perTypeStat: object expected";
            var key = Object.keys(message.perTypeStat);
            for (var i = 0; i < key.length; ++i) {
                var error = $root.TypeStat.verify(message.perTypeStat[key[i]]);
                if (error)
                    return "perTypeStat." + error;
            }
        }
        if (message.typeStatsWithContext != null && message.hasOwnProperty("typeStatsWithContext")) {
            if (!Array.isArray(message.typeStatsWithContext))
                return "typeStatsWithContext: array expected";
            for (var i = 0; i < message.typeStatsWithContext.length; ++i) {
                var error = $root.ContextualizedTypeStats.verify(message.typeStatsWithContext[i]);
                if (error)
                    return "typeStatsWithContext." + error;
            }
        }
        return null;
    };

    /**
     * Creates a QueryStats message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof QueryStats
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {QueryStats} QueryStats
     */
    QueryStats.fromObject = function fromObject(object) {
        if (object instanceof $root.QueryStats)
            return object;
        var message = new $root.QueryStats();
        if (object.perClientName) {
            if (typeof object.perClientName !== "object")
                throw TypeError(".QueryStats.perClientName: object expected");
            message.perClientName = {};
            for (var keys = Object.keys(object.perClientName), i = 0; i < keys.length; ++i) {
                if (typeof object.perClientName[keys[i]] !== "object")
                    throw TypeError(".QueryStats.perClientName: object expected");
                message.perClientName[keys[i]] = $root.ClientNameStats.fromObject(object.perClientName[keys[i]]);
            }
        }
        if (object.queryStatsWithContext) {
            if (!Array.isArray(object.queryStatsWithContext))
                throw TypeError(".QueryStats.queryStatsWithContext: array expected");
            message.queryStatsWithContext = [];
            for (var i = 0; i < object.queryStatsWithContext.length; ++i) {
                if (typeof object.queryStatsWithContext[i] !== "object")
                    throw TypeError(".QueryStats.queryStatsWithContext: object expected");
                message.queryStatsWithContext[i] = $root.ContextualizedQueryLatencyStats.fromObject(object.queryStatsWithContext[i]);
            }
        }
        if (object.perType) {
            if (!Array.isArray(object.perType))
                throw TypeError(".QueryStats.perType: array expected");
            message.perType = [];
            for (var i = 0; i < object.perType.length; ++i) {
                if (typeof object.perType[i] !== "object")
                    throw TypeError(".QueryStats.perType: object expected");
                message.perType[i] = $root.TypeStat.fromObject(object.perType[i]);
            }
        }
        if (object.perTypeStat) {
            if (typeof object.perTypeStat !== "object")
                throw TypeError(".QueryStats.perTypeStat: object expected");
            message.perTypeStat = {};
            for (var keys = Object.keys(object.perTypeStat), i = 0; i < keys.length; ++i) {
                if (typeof object.perTypeStat[keys[i]] !== "object")
                    throw TypeError(".QueryStats.perTypeStat: object expected");
                message.perTypeStat[keys[i]] = $root.TypeStat.fromObject(object.perTypeStat[keys[i]]);
            }
        }
        if (object.typeStatsWithContext) {
            if (!Array.isArray(object.typeStatsWithContext))
                throw TypeError(".QueryStats.typeStatsWithContext: array expected");
            message.typeStatsWithContext = [];
            for (var i = 0; i < object.typeStatsWithContext.length; ++i) {
                if (typeof object.typeStatsWithContext[i] !== "object")
                    throw TypeError(".QueryStats.typeStatsWithContext: object expected");
                message.typeStatsWithContext[i] = $root.ContextualizedTypeStats.fromObject(object.typeStatsWithContext[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a QueryStats message. Also converts values to other types if specified.
     * @function toObject
     * @memberof QueryStats
     * @static
     * @param {QueryStats} message QueryStats
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    QueryStats.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.perType = [];
            object.queryStatsWithContext = [];
            object.typeStatsWithContext = [];
        }
        if (options.objects || options.defaults) {
            object.perClientName = {};
            object.perTypeStat = {};
        }
        var keys2;
        if (message.perClientName && (keys2 = Object.keys(message.perClientName)).length) {
            object.perClientName = {};
            for (var j = 0; j < keys2.length; ++j)
                object.perClientName[keys2[j]] = $root.ClientNameStats.toObject(message.perClientName[keys2[j]], options);
        }
        if (message.perType && message.perType.length) {
            object.perType = [];
            for (var j = 0; j < message.perType.length; ++j)
                object.perType[j] = $root.TypeStat.toObject(message.perType[j], options);
        }
        if (message.perTypeStat && (keys2 = Object.keys(message.perTypeStat)).length) {
            object.perTypeStat = {};
            for (var j = 0; j < keys2.length; ++j)
                object.perTypeStat[keys2[j]] = $root.TypeStat.toObject(message.perTypeStat[keys2[j]], options);
        }
        if (message.queryStatsWithContext && message.queryStatsWithContext.length) {
            object.queryStatsWithContext = [];
            for (var j = 0; j < message.queryStatsWithContext.length; ++j)
                object.queryStatsWithContext[j] = $root.ContextualizedQueryLatencyStats.toObject(message.queryStatsWithContext[j], options);
        }
        if (message.typeStatsWithContext && message.typeStatsWithContext.length) {
            object.typeStatsWithContext = [];
            for (var j = 0; j < message.typeStatsWithContext.length; ++j)
                object.typeStatsWithContext[j] = $root.ContextualizedTypeStats.toObject(message.typeStatsWithContext[j], options);
        }
        return object;
    };

    /**
     * Converts this QueryStats to JSON.
     * @function toJSON
     * @memberof QueryStats
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    QueryStats.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return QueryStats;
})();

$root.TracesReport = (function() {

    /**
     * Properties of a TracesReport.
     * @exports ITracesReport
     * @interface ITracesReport
     * @property {IReportHeader|null} [header] TracesReport header
     * @property {Array.<ITrace>|null} [trace] TracesReport trace
     */

    /**
     * Constructs a new TracesReport.
     * @exports TracesReport
     * @classdesc Represents a TracesReport.
     * @implements ITracesReport
     * @constructor
     * @param {ITracesReport=} [properties] Properties to set
     */
    function TracesReport(properties) {
        this.trace = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TracesReport header.
     * @member {IReportHeader|null|undefined} header
     * @memberof TracesReport
     * @instance
     */
    TracesReport.prototype.header = null;

    /**
     * TracesReport trace.
     * @member {Array.<ITrace>} trace
     * @memberof TracesReport
     * @instance
     */
    TracesReport.prototype.trace = $util.emptyArray;

    /**
     * Creates a new TracesReport instance using the specified properties.
     * @function create
     * @memberof TracesReport
     * @static
     * @param {ITracesReport=} [properties] Properties to set
     * @returns {TracesReport} TracesReport instance
     */
    TracesReport.create = function create(properties) {
        return new TracesReport(properties);
    };

    /**
     * Encodes the specified TracesReport message. Does not implicitly {@link TracesReport.verify|verify} messages.
     * @function encode
     * @memberof TracesReport
     * @static
     * @param {ITracesReport} message TracesReport message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TracesReport.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.header != null && Object.hasOwnProperty.call(message, "header"))
            $root.ReportHeader.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.trace != null && message.trace.length)
            for (var i = 0; i < message.trace.length; ++i)
                $root.Trace.encode(message.trace[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified TracesReport message, length delimited. Does not implicitly {@link TracesReport.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TracesReport
     * @static
     * @param {ITracesReport} message TracesReport message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TracesReport.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TracesReport message from the specified reader or buffer.
     * @function decode
     * @memberof TracesReport
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TracesReport} TracesReport
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TracesReport.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TracesReport();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.header = $root.ReportHeader.decode(reader, reader.uint32());
                break;
            case 2:
                if (!(message.trace && message.trace.length))
                    message.trace = [];
                message.trace.push($root.Trace.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TracesReport message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TracesReport
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TracesReport} TracesReport
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TracesReport.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TracesReport message.
     * @function verify
     * @memberof TracesReport
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TracesReport.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.header != null && message.hasOwnProperty("header")) {
            var error = $root.ReportHeader.verify(message.header);
            if (error)
                return "header." + error;
        }
        if (message.trace != null && message.hasOwnProperty("trace")) {
            if (!Array.isArray(message.trace))
                return "trace: array expected";
            for (var i = 0; i < message.trace.length; ++i) {
                var error = $root.Trace.verify(message.trace[i]);
                if (error)
                    return "trace." + error;
            }
        }
        return null;
    };

    /**
     * Creates a TracesReport message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TracesReport
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TracesReport} TracesReport
     */
    TracesReport.fromObject = function fromObject(object) {
        if (object instanceof $root.TracesReport)
            return object;
        var message = new $root.TracesReport();
        if (object.header != null) {
            if (typeof object.header !== "object")
                throw TypeError(".TracesReport.header: object expected");
            message.header = $root.ReportHeader.fromObject(object.header);
        }
        if (object.trace) {
            if (!Array.isArray(object.trace))
                throw TypeError(".TracesReport.trace: array expected");
            message.trace = [];
            for (var i = 0; i < object.trace.length; ++i) {
                if (typeof object.trace[i] !== "object")
                    throw TypeError(".TracesReport.trace: object expected");
                message.trace[i] = $root.Trace.fromObject(object.trace[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a TracesReport message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TracesReport
     * @static
     * @param {TracesReport} message TracesReport
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TracesReport.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.trace = [];
        if (options.defaults)
            object.header = null;
        if (message.header != null && message.hasOwnProperty("header"))
            object.header = $root.ReportHeader.toObject(message.header, options);
        if (message.trace && message.trace.length) {
            object.trace = [];
            for (var j = 0; j < message.trace.length; ++j)
                object.trace[j] = $root.Trace.toObject(message.trace[j], options);
        }
        return object;
    };

    /**
     * Converts this TracesReport to JSON.
     * @function toJSON
     * @memberof TracesReport
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TracesReport.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return TracesReport;
})();

$root.Field = (function() {

    /**
     * Properties of a Field.
     * @exports IField
     * @interface IField
     * @property {string|null} [name] Field name
     * @property {string|null} [returnType] Field returnType
     */

    /**
     * Constructs a new Field.
     * @exports Field
     * @classdesc Represents a Field.
     * @implements IField
     * @constructor
     * @param {IField=} [properties] Properties to set
     */
    function Field(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Field name.
     * @member {string} name
     * @memberof Field
     * @instance
     */
    Field.prototype.name = "";

    /**
     * Field returnType.
     * @member {string} returnType
     * @memberof Field
     * @instance
     */
    Field.prototype.returnType = "";

    /**
     * Creates a new Field instance using the specified properties.
     * @function create
     * @memberof Field
     * @static
     * @param {IField=} [properties] Properties to set
     * @returns {Field} Field instance
     */
    Field.create = function create(properties) {
        return new Field(properties);
    };

    /**
     * Encodes the specified Field message. Does not implicitly {@link Field.verify|verify} messages.
     * @function encode
     * @memberof Field
     * @static
     * @param {IField} message Field message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Field.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        if (message.returnType != null && Object.hasOwnProperty.call(message, "returnType"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.returnType);
        return writer;
    };

    /**
     * Encodes the specified Field message, length delimited. Does not implicitly {@link Field.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Field
     * @static
     * @param {IField} message Field message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Field.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Field message from the specified reader or buffer.
     * @function decode
     * @memberof Field
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Field} Field
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Field.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Field();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 2:
                message.name = reader.string();
                break;
            case 3:
                message.returnType = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Field message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Field
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Field} Field
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Field.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Field message.
     * @function verify
     * @memberof Field
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Field.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.returnType != null && message.hasOwnProperty("returnType"))
            if (!$util.isString(message.returnType))
                return "returnType: string expected";
        return null;
    };

    /**
     * Creates a Field message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Field
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Field} Field
     */
    Field.fromObject = function fromObject(object) {
        if (object instanceof $root.Field)
            return object;
        var message = new $root.Field();
        if (object.name != null)
            message.name = String(object.name);
        if (object.returnType != null)
            message.returnType = String(object.returnType);
        return message;
    };

    /**
     * Creates a plain object from a Field message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Field
     * @static
     * @param {Field} message Field
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Field.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.name = "";
            object.returnType = "";
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.returnType != null && message.hasOwnProperty("returnType"))
            object.returnType = message.returnType;
        return object;
    };

    /**
     * Converts this Field to JSON.
     * @function toJSON
     * @memberof Field
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Field.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Field;
})();

$root.Type = (function() {

    /**
     * Properties of a Type.
     * @exports IType
     * @interface IType
     * @property {string|null} [name] Type name
     * @property {Array.<IField>|null} [field] Type field
     */

    /**
     * Constructs a new Type.
     * @exports Type
     * @classdesc Represents a Type.
     * @implements IType
     * @constructor
     * @param {IType=} [properties] Properties to set
     */
    function Type(properties) {
        this.field = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Type name.
     * @member {string} name
     * @memberof Type
     * @instance
     */
    Type.prototype.name = "";

    /**
     * Type field.
     * @member {Array.<IField>} field
     * @memberof Type
     * @instance
     */
    Type.prototype.field = $util.emptyArray;

    /**
     * Creates a new Type instance using the specified properties.
     * @function create
     * @memberof Type
     * @static
     * @param {IType=} [properties] Properties to set
     * @returns {Type} Type instance
     */
    Type.create = function create(properties) {
        return new Type(properties);
    };

    /**
     * Encodes the specified Type message. Does not implicitly {@link Type.verify|verify} messages.
     * @function encode
     * @memberof Type
     * @static
     * @param {IType} message Type message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Type.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.field != null && message.field.length)
            for (var i = 0; i < message.field.length; ++i)
                $root.Field.encode(message.field[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Type message, length delimited. Does not implicitly {@link Type.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Type
     * @static
     * @param {IType} message Type message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Type.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Type message from the specified reader or buffer.
     * @function decode
     * @memberof Type
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Type} Type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Type.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Type();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.name = reader.string();
                break;
            case 2:
                if (!(message.field && message.field.length))
                    message.field = [];
                message.field.push($root.Field.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Type message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Type
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Type} Type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Type.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Type message.
     * @function verify
     * @memberof Type
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Type.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.field != null && message.hasOwnProperty("field")) {
            if (!Array.isArray(message.field))
                return "field: array expected";
            for (var i = 0; i < message.field.length; ++i) {
                var error = $root.Field.verify(message.field[i]);
                if (error)
                    return "field." + error;
            }
        }
        return null;
    };

    /**
     * Creates a Type message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Type
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Type} Type
     */
    Type.fromObject = function fromObject(object) {
        if (object instanceof $root.Type)
            return object;
        var message = new $root.Type();
        if (object.name != null)
            message.name = String(object.name);
        if (object.field) {
            if (!Array.isArray(object.field))
                throw TypeError(".Type.field: array expected");
            message.field = [];
            for (var i = 0; i < object.field.length; ++i) {
                if (typeof object.field[i] !== "object")
                    throw TypeError(".Type.field: object expected");
                message.field[i] = $root.Field.fromObject(object.field[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a Type message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Type
     * @static
     * @param {Type} message Type
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Type.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.field = [];
        if (options.defaults)
            object.name = "";
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.field && message.field.length) {
            object.field = [];
            for (var j = 0; j < message.field.length; ++j)
                object.field[j] = $root.Field.toObject(message.field[j], options);
        }
        return object;
    };

    /**
     * Converts this Type to JSON.
     * @function toJSON
     * @memberof Type
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Type.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Type;
})();

$root.MemStats = (function() {

    /**
     * Properties of a MemStats.
     * @exports IMemStats
     * @interface IMemStats
     * @property {number|null} [totalBytes] MemStats totalBytes
     * @property {number|null} [stackBytes] MemStats stackBytes
     * @property {number|null} [heapBytes] MemStats heapBytes
     * @property {number|null} [heapReleasedBytes] MemStats heapReleasedBytes
     * @property {number|null} [gcOverheadBytes] MemStats gcOverheadBytes
     * @property {number|null} [stackUsedBytes] MemStats stackUsedBytes
     * @property {number|null} [heapAllocatedBytes] MemStats heapAllocatedBytes
     * @property {number|null} [heapAllocatedObjects] MemStats heapAllocatedObjects
     * @property {number|null} [heapAllocatedBytesDelta] MemStats heapAllocatedBytesDelta
     * @property {number|null} [heapAllocatedObjectsDelta] MemStats heapAllocatedObjectsDelta
     * @property {number|null} [heapFreedObjectsDelta] MemStats heapFreedObjectsDelta
     * @property {number|null} [gcStwNsDelta] MemStats gcStwNsDelta
     * @property {number|null} [gcCountDelta] MemStats gcCountDelta
     */

    /**
     * Constructs a new MemStats.
     * @exports MemStats
     * @classdesc Represents a MemStats.
     * @implements IMemStats
     * @constructor
     * @param {IMemStats=} [properties] Properties to set
     */
    function MemStats(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MemStats totalBytes.
     * @member {number} totalBytes
     * @memberof MemStats
     * @instance
     */
    MemStats.prototype.totalBytes = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * MemStats stackBytes.
     * @member {number} stackBytes
     * @memberof MemStats
     * @instance
     */
    MemStats.prototype.stackBytes = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * MemStats heapBytes.
     * @member {number} heapBytes
     * @memberof MemStats
     * @instance
     */
    MemStats.prototype.heapBytes = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * MemStats heapReleasedBytes.
     * @member {number} heapReleasedBytes
     * @memberof MemStats
     * @instance
     */
    MemStats.prototype.heapReleasedBytes = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * MemStats gcOverheadBytes.
     * @member {number} gcOverheadBytes
     * @memberof MemStats
     * @instance
     */
    MemStats.prototype.gcOverheadBytes = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * MemStats stackUsedBytes.
     * @member {number} stackUsedBytes
     * @memberof MemStats
     * @instance
     */
    MemStats.prototype.stackUsedBytes = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * MemStats heapAllocatedBytes.
     * @member {number} heapAllocatedBytes
     * @memberof MemStats
     * @instance
     */
    MemStats.prototype.heapAllocatedBytes = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * MemStats heapAllocatedObjects.
     * @member {number} heapAllocatedObjects
     * @memberof MemStats
     * @instance
     */
    MemStats.prototype.heapAllocatedObjects = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * MemStats heapAllocatedBytesDelta.
     * @member {number} heapAllocatedBytesDelta
     * @memberof MemStats
     * @instance
     */
    MemStats.prototype.heapAllocatedBytesDelta = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * MemStats heapAllocatedObjectsDelta.
     * @member {number} heapAllocatedObjectsDelta
     * @memberof MemStats
     * @instance
     */
    MemStats.prototype.heapAllocatedObjectsDelta = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * MemStats heapFreedObjectsDelta.
     * @member {number} heapFreedObjectsDelta
     * @memberof MemStats
     * @instance
     */
    MemStats.prototype.heapFreedObjectsDelta = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * MemStats gcStwNsDelta.
     * @member {number} gcStwNsDelta
     * @memberof MemStats
     * @instance
     */
    MemStats.prototype.gcStwNsDelta = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * MemStats gcCountDelta.
     * @member {number} gcCountDelta
     * @memberof MemStats
     * @instance
     */
    MemStats.prototype.gcCountDelta = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new MemStats instance using the specified properties.
     * @function create
     * @memberof MemStats
     * @static
     * @param {IMemStats=} [properties] Properties to set
     * @returns {MemStats} MemStats instance
     */
    MemStats.create = function create(properties) {
        return new MemStats(properties);
    };

    /**
     * Encodes the specified MemStats message. Does not implicitly {@link MemStats.verify|verify} messages.
     * @function encode
     * @memberof MemStats
     * @static
     * @param {IMemStats} message MemStats message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MemStats.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.totalBytes != null && Object.hasOwnProperty.call(message, "totalBytes"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.totalBytes);
        if (message.stackBytes != null && Object.hasOwnProperty.call(message, "stackBytes"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.stackBytes);
        if (message.heapBytes != null && Object.hasOwnProperty.call(message, "heapBytes"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.heapBytes);
        if (message.gcOverheadBytes != null && Object.hasOwnProperty.call(message, "gcOverheadBytes"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.gcOverheadBytes);
        if (message.stackUsedBytes != null && Object.hasOwnProperty.call(message, "stackUsedBytes"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.stackUsedBytes);
        if (message.heapAllocatedBytes != null && Object.hasOwnProperty.call(message, "heapAllocatedBytes"))
            writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.heapAllocatedBytes);
        if (message.heapAllocatedObjects != null && Object.hasOwnProperty.call(message, "heapAllocatedObjects"))
            writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.heapAllocatedObjects);
        if (message.heapAllocatedBytesDelta != null && Object.hasOwnProperty.call(message, "heapAllocatedBytesDelta"))
            writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.heapAllocatedBytesDelta);
        if (message.heapAllocatedObjectsDelta != null && Object.hasOwnProperty.call(message, "heapAllocatedObjectsDelta"))
            writer.uint32(/* id 9, wireType 0 =*/72).uint64(message.heapAllocatedObjectsDelta);
        if (message.heapFreedObjectsDelta != null && Object.hasOwnProperty.call(message, "heapFreedObjectsDelta"))
            writer.uint32(/* id 10, wireType 0 =*/80).uint64(message.heapFreedObjectsDelta);
        if (message.gcStwNsDelta != null && Object.hasOwnProperty.call(message, "gcStwNsDelta"))
            writer.uint32(/* id 11, wireType 0 =*/88).uint64(message.gcStwNsDelta);
        if (message.gcCountDelta != null && Object.hasOwnProperty.call(message, "gcCountDelta"))
            writer.uint32(/* id 12, wireType 0 =*/96).uint64(message.gcCountDelta);
        if (message.heapReleasedBytes != null && Object.hasOwnProperty.call(message, "heapReleasedBytes"))
            writer.uint32(/* id 13, wireType 0 =*/104).uint64(message.heapReleasedBytes);
        return writer;
    };

    /**
     * Encodes the specified MemStats message, length delimited. Does not implicitly {@link MemStats.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MemStats
     * @static
     * @param {IMemStats} message MemStats message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MemStats.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MemStats message from the specified reader or buffer.
     * @function decode
     * @memberof MemStats
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MemStats} MemStats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MemStats.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MemStats();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.totalBytes = reader.uint64();
                break;
            case 2:
                message.stackBytes = reader.uint64();
                break;
            case 3:
                message.heapBytes = reader.uint64();
                break;
            case 13:
                message.heapReleasedBytes = reader.uint64();
                break;
            case 4:
                message.gcOverheadBytes = reader.uint64();
                break;
            case 5:
                message.stackUsedBytes = reader.uint64();
                break;
            case 6:
                message.heapAllocatedBytes = reader.uint64();
                break;
            case 7:
                message.heapAllocatedObjects = reader.uint64();
                break;
            case 8:
                message.heapAllocatedBytesDelta = reader.uint64();
                break;
            case 9:
                message.heapAllocatedObjectsDelta = reader.uint64();
                break;
            case 10:
                message.heapFreedObjectsDelta = reader.uint64();
                break;
            case 11:
                message.gcStwNsDelta = reader.uint64();
                break;
            case 12:
                message.gcCountDelta = reader.uint64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MemStats message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MemStats
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MemStats} MemStats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MemStats.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MemStats message.
     * @function verify
     * @memberof MemStats
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MemStats.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.totalBytes != null && message.hasOwnProperty("totalBytes"))
            if (!$util.isInteger(message.totalBytes) && !(message.totalBytes && $util.isInteger(message.totalBytes.low) && $util.isInteger(message.totalBytes.high)))
                return "totalBytes: integer|Long expected";
        if (message.stackBytes != null && message.hasOwnProperty("stackBytes"))
            if (!$util.isInteger(message.stackBytes) && !(message.stackBytes && $util.isInteger(message.stackBytes.low) && $util.isInteger(message.stackBytes.high)))
                return "stackBytes: integer|Long expected";
        if (message.heapBytes != null && message.hasOwnProperty("heapBytes"))
            if (!$util.isInteger(message.heapBytes) && !(message.heapBytes && $util.isInteger(message.heapBytes.low) && $util.isInteger(message.heapBytes.high)))
                return "heapBytes: integer|Long expected";
        if (message.heapReleasedBytes != null && message.hasOwnProperty("heapReleasedBytes"))
            if (!$util.isInteger(message.heapReleasedBytes) && !(message.heapReleasedBytes && $util.isInteger(message.heapReleasedBytes.low) && $util.isInteger(message.heapReleasedBytes.high)))
                return "heapReleasedBytes: integer|Long expected";
        if (message.gcOverheadBytes != null && message.hasOwnProperty("gcOverheadBytes"))
            if (!$util.isInteger(message.gcOverheadBytes) && !(message.gcOverheadBytes && $util.isInteger(message.gcOverheadBytes.low) && $util.isInteger(message.gcOverheadBytes.high)))
                return "gcOverheadBytes: integer|Long expected";
        if (message.stackUsedBytes != null && message.hasOwnProperty("stackUsedBytes"))
            if (!$util.isInteger(message.stackUsedBytes) && !(message.stackUsedBytes && $util.isInteger(message.stackUsedBytes.low) && $util.isInteger(message.stackUsedBytes.high)))
                return "stackUsedBytes: integer|Long expected";
        if (message.heapAllocatedBytes != null && message.hasOwnProperty("heapAllocatedBytes"))
            if (!$util.isInteger(message.heapAllocatedBytes) && !(message.heapAllocatedBytes && $util.isInteger(message.heapAllocatedBytes.low) && $util.isInteger(message.heapAllocatedBytes.high)))
                return "heapAllocatedBytes: integer|Long expected";
        if (message.heapAllocatedObjects != null && message.hasOwnProperty("heapAllocatedObjects"))
            if (!$util.isInteger(message.heapAllocatedObjects) && !(message.heapAllocatedObjects && $util.isInteger(message.heapAllocatedObjects.low) && $util.isInteger(message.heapAllocatedObjects.high)))
                return "heapAllocatedObjects: integer|Long expected";
        if (message.heapAllocatedBytesDelta != null && message.hasOwnProperty("heapAllocatedBytesDelta"))
            if (!$util.isInteger(message.heapAllocatedBytesDelta) && !(message.heapAllocatedBytesDelta && $util.isInteger(message.heapAllocatedBytesDelta.low) && $util.isInteger(message.heapAllocatedBytesDelta.high)))
                return "heapAllocatedBytesDelta: integer|Long expected";
        if (message.heapAllocatedObjectsDelta != null && message.hasOwnProperty("heapAllocatedObjectsDelta"))
            if (!$util.isInteger(message.heapAllocatedObjectsDelta) && !(message.heapAllocatedObjectsDelta && $util.isInteger(message.heapAllocatedObjectsDelta.low) && $util.isInteger(message.heapAllocatedObjectsDelta.high)))
                return "heapAllocatedObjectsDelta: integer|Long expected";
        if (message.heapFreedObjectsDelta != null && message.hasOwnProperty("heapFreedObjectsDelta"))
            if (!$util.isInteger(message.heapFreedObjectsDelta) && !(message.heapFreedObjectsDelta && $util.isInteger(message.heapFreedObjectsDelta.low) && $util.isInteger(message.heapFreedObjectsDelta.high)))
                return "heapFreedObjectsDelta: integer|Long expected";
        if (message.gcStwNsDelta != null && message.hasOwnProperty("gcStwNsDelta"))
            if (!$util.isInteger(message.gcStwNsDelta) && !(message.gcStwNsDelta && $util.isInteger(message.gcStwNsDelta.low) && $util.isInteger(message.gcStwNsDelta.high)))
                return "gcStwNsDelta: integer|Long expected";
        if (message.gcCountDelta != null && message.hasOwnProperty("gcCountDelta"))
            if (!$util.isInteger(message.gcCountDelta) && !(message.gcCountDelta && $util.isInteger(message.gcCountDelta.low) && $util.isInteger(message.gcCountDelta.high)))
                return "gcCountDelta: integer|Long expected";
        return null;
    };

    /**
     * Creates a MemStats message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MemStats
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MemStats} MemStats
     */
    MemStats.fromObject = function fromObject(object) {
        if (object instanceof $root.MemStats)
            return object;
        var message = new $root.MemStats();
        if (object.totalBytes != null)
            if ($util.Long)
                (message.totalBytes = $util.Long.fromValue(object.totalBytes)).unsigned = true;
            else if (typeof object.totalBytes === "string")
                message.totalBytes = parseInt(object.totalBytes, 10);
            else if (typeof object.totalBytes === "number")
                message.totalBytes = object.totalBytes;
            else if (typeof object.totalBytes === "object")
                message.totalBytes = new $util.LongBits(object.totalBytes.low >>> 0, object.totalBytes.high >>> 0).toNumber(true);
        if (object.stackBytes != null)
            if ($util.Long)
                (message.stackBytes = $util.Long.fromValue(object.stackBytes)).unsigned = true;
            else if (typeof object.stackBytes === "string")
                message.stackBytes = parseInt(object.stackBytes, 10);
            else if (typeof object.stackBytes === "number")
                message.stackBytes = object.stackBytes;
            else if (typeof object.stackBytes === "object")
                message.stackBytes = new $util.LongBits(object.stackBytes.low >>> 0, object.stackBytes.high >>> 0).toNumber(true);
        if (object.heapBytes != null)
            if ($util.Long)
                (message.heapBytes = $util.Long.fromValue(object.heapBytes)).unsigned = true;
            else if (typeof object.heapBytes === "string")
                message.heapBytes = parseInt(object.heapBytes, 10);
            else if (typeof object.heapBytes === "number")
                message.heapBytes = object.heapBytes;
            else if (typeof object.heapBytes === "object")
                message.heapBytes = new $util.LongBits(object.heapBytes.low >>> 0, object.heapBytes.high >>> 0).toNumber(true);
        if (object.heapReleasedBytes != null)
            if ($util.Long)
                (message.heapReleasedBytes = $util.Long.fromValue(object.heapReleasedBytes)).unsigned = true;
            else if (typeof object.heapReleasedBytes === "string")
                message.heapReleasedBytes = parseInt(object.heapReleasedBytes, 10);
            else if (typeof object.heapReleasedBytes === "number")
                message.heapReleasedBytes = object.heapReleasedBytes;
            else if (typeof object.heapReleasedBytes === "object")
                message.heapReleasedBytes = new $util.LongBits(object.heapReleasedBytes.low >>> 0, object.heapReleasedBytes.high >>> 0).toNumber(true);
        if (object.gcOverheadBytes != null)
            if ($util.Long)
                (message.gcOverheadBytes = $util.Long.fromValue(object.gcOverheadBytes)).unsigned = true;
            else if (typeof object.gcOverheadBytes === "string")
                message.gcOverheadBytes = parseInt(object.gcOverheadBytes, 10);
            else if (typeof object.gcOverheadBytes === "number")
                message.gcOverheadBytes = object.gcOverheadBytes;
            else if (typeof object.gcOverheadBytes === "object")
                message.gcOverheadBytes = new $util.LongBits(object.gcOverheadBytes.low >>> 0, object.gcOverheadBytes.high >>> 0).toNumber(true);
        if (object.stackUsedBytes != null)
            if ($util.Long)
                (message.stackUsedBytes = $util.Long.fromValue(object.stackUsedBytes)).unsigned = true;
            else if (typeof object.stackUsedBytes === "string")
                message.stackUsedBytes = parseInt(object.stackUsedBytes, 10);
            else if (typeof object.stackUsedBytes === "number")
                message.stackUsedBytes = object.stackUsedBytes;
            else if (typeof object.stackUsedBytes === "object")
                message.stackUsedBytes = new $util.LongBits(object.stackUsedBytes.low >>> 0, object.stackUsedBytes.high >>> 0).toNumber(true);
        if (object.heapAllocatedBytes != null)
            if ($util.Long)
                (message.heapAllocatedBytes = $util.Long.fromValue(object.heapAllocatedBytes)).unsigned = true;
            else if (typeof object.heapAllocatedBytes === "string")
                message.heapAllocatedBytes = parseInt(object.heapAllocatedBytes, 10);
            else if (typeof object.heapAllocatedBytes === "number")
                message.heapAllocatedBytes = object.heapAllocatedBytes;
            else if (typeof object.heapAllocatedBytes === "object")
                message.heapAllocatedBytes = new $util.LongBits(object.heapAllocatedBytes.low >>> 0, object.heapAllocatedBytes.high >>> 0).toNumber(true);
        if (object.heapAllocatedObjects != null)
            if ($util.Long)
                (message.heapAllocatedObjects = $util.Long.fromValue(object.heapAllocatedObjects)).unsigned = true;
            else if (typeof object.heapAllocatedObjects === "string")
                message.heapAllocatedObjects = parseInt(object.heapAllocatedObjects, 10);
            else if (typeof object.heapAllocatedObjects === "number")
                message.heapAllocatedObjects = object.heapAllocatedObjects;
            else if (typeof object.heapAllocatedObjects === "object")
                message.heapAllocatedObjects = new $util.LongBits(object.heapAllocatedObjects.low >>> 0, object.heapAllocatedObjects.high >>> 0).toNumber(true);
        if (object.heapAllocatedBytesDelta != null)
            if ($util.Long)
                (message.heapAllocatedBytesDelta = $util.Long.fromValue(object.heapAllocatedBytesDelta)).unsigned = true;
            else if (typeof object.heapAllocatedBytesDelta === "string")
                message.heapAllocatedBytesDelta = parseInt(object.heapAllocatedBytesDelta, 10);
            else if (typeof object.heapAllocatedBytesDelta === "number")
                message.heapAllocatedBytesDelta = object.heapAllocatedBytesDelta;
            else if (typeof object.heapAllocatedBytesDelta === "object")
                message.heapAllocatedBytesDelta = new $util.LongBits(object.heapAllocatedBytesDelta.low >>> 0, object.heapAllocatedBytesDelta.high >>> 0).toNumber(true);
        if (object.heapAllocatedObjectsDelta != null)
            if ($util.Long)
                (message.heapAllocatedObjectsDelta = $util.Long.fromValue(object.heapAllocatedObjectsDelta)).unsigned = true;
            else if (typeof object.heapAllocatedObjectsDelta === "string")
                message.heapAllocatedObjectsDelta = parseInt(object.heapAllocatedObjectsDelta, 10);
            else if (typeof object.heapAllocatedObjectsDelta === "number")
                message.heapAllocatedObjectsDelta = object.heapAllocatedObjectsDelta;
            else if (typeof object.heapAllocatedObjectsDelta === "object")
                message.heapAllocatedObjectsDelta = new $util.LongBits(object.heapAllocatedObjectsDelta.low >>> 0, object.heapAllocatedObjectsDelta.high >>> 0).toNumber(true);
        if (object.heapFreedObjectsDelta != null)
            if ($util.Long)
                (message.heapFreedObjectsDelta = $util.Long.fromValue(object.heapFreedObjectsDelta)).unsigned = true;
            else if (typeof object.heapFreedObjectsDelta === "string")
                message.heapFreedObjectsDelta = parseInt(object.heapFreedObjectsDelta, 10);
            else if (typeof object.heapFreedObjectsDelta === "number")
                message.heapFreedObjectsDelta = object.heapFreedObjectsDelta;
            else if (typeof object.heapFreedObjectsDelta === "object")
                message.heapFreedObjectsDelta = new $util.LongBits(object.heapFreedObjectsDelta.low >>> 0, object.heapFreedObjectsDelta.high >>> 0).toNumber(true);
        if (object.gcStwNsDelta != null)
            if ($util.Long)
                (message.gcStwNsDelta = $util.Long.fromValue(object.gcStwNsDelta)).unsigned = true;
            else if (typeof object.gcStwNsDelta === "string")
                message.gcStwNsDelta = parseInt(object.gcStwNsDelta, 10);
            else if (typeof object.gcStwNsDelta === "number")
                message.gcStwNsDelta = object.gcStwNsDelta;
            else if (typeof object.gcStwNsDelta === "object")
                message.gcStwNsDelta = new $util.LongBits(object.gcStwNsDelta.low >>> 0, object.gcStwNsDelta.high >>> 0).toNumber(true);
        if (object.gcCountDelta != null)
            if ($util.Long)
                (message.gcCountDelta = $util.Long.fromValue(object.gcCountDelta)).unsigned = true;
            else if (typeof object.gcCountDelta === "string")
                message.gcCountDelta = parseInt(object.gcCountDelta, 10);
            else if (typeof object.gcCountDelta === "number")
                message.gcCountDelta = object.gcCountDelta;
            else if (typeof object.gcCountDelta === "object")
                message.gcCountDelta = new $util.LongBits(object.gcCountDelta.low >>> 0, object.gcCountDelta.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a MemStats message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MemStats
     * @static
     * @param {MemStats} message MemStats
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MemStats.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.totalBytes = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.totalBytes = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.stackBytes = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.stackBytes = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.heapBytes = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.heapBytes = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.gcOverheadBytes = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.gcOverheadBytes = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.stackUsedBytes = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.stackUsedBytes = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.heapAllocatedBytes = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.heapAllocatedBytes = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.heapAllocatedObjects = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.heapAllocatedObjects = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.heapAllocatedBytesDelta = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.heapAllocatedBytesDelta = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.heapAllocatedObjectsDelta = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.heapAllocatedObjectsDelta = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.heapFreedObjectsDelta = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.heapFreedObjectsDelta = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.gcStwNsDelta = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.gcStwNsDelta = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.gcCountDelta = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.gcCountDelta = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.heapReleasedBytes = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.heapReleasedBytes = options.longs === String ? "0" : 0;
        }
        if (message.totalBytes != null && message.hasOwnProperty("totalBytes"))
            if (typeof message.totalBytes === "number")
                object.totalBytes = options.longs === String ? String(message.totalBytes) : message.totalBytes;
            else
                object.totalBytes = options.longs === String ? $util.Long.prototype.toString.call(message.totalBytes) : options.longs === Number ? new $util.LongBits(message.totalBytes.low >>> 0, message.totalBytes.high >>> 0).toNumber(true) : message.totalBytes;
        if (message.stackBytes != null && message.hasOwnProperty("stackBytes"))
            if (typeof message.stackBytes === "number")
                object.stackBytes = options.longs === String ? String(message.stackBytes) : message.stackBytes;
            else
                object.stackBytes = options.longs === String ? $util.Long.prototype.toString.call(message.stackBytes) : options.longs === Number ? new $util.LongBits(message.stackBytes.low >>> 0, message.stackBytes.high >>> 0).toNumber(true) : message.stackBytes;
        if (message.heapBytes != null && message.hasOwnProperty("heapBytes"))
            if (typeof message.heapBytes === "number")
                object.heapBytes = options.longs === String ? String(message.heapBytes) : message.heapBytes;
            else
                object.heapBytes = options.longs === String ? $util.Long.prototype.toString.call(message.heapBytes) : options.longs === Number ? new $util.LongBits(message.heapBytes.low >>> 0, message.heapBytes.high >>> 0).toNumber(true) : message.heapBytes;
        if (message.gcOverheadBytes != null && message.hasOwnProperty("gcOverheadBytes"))
            if (typeof message.gcOverheadBytes === "number")
                object.gcOverheadBytes = options.longs === String ? String(message.gcOverheadBytes) : message.gcOverheadBytes;
            else
                object.gcOverheadBytes = options.longs === String ? $util.Long.prototype.toString.call(message.gcOverheadBytes) : options.longs === Number ? new $util.LongBits(message.gcOverheadBytes.low >>> 0, message.gcOverheadBytes.high >>> 0).toNumber(true) : message.gcOverheadBytes;
        if (message.stackUsedBytes != null && message.hasOwnProperty("stackUsedBytes"))
            if (typeof message.stackUsedBytes === "number")
                object.stackUsedBytes = options.longs === String ? String(message.stackUsedBytes) : message.stackUsedBytes;
            else
                object.stackUsedBytes = options.longs === String ? $util.Long.prototype.toString.call(message.stackUsedBytes) : options.longs === Number ? new $util.LongBits(message.stackUsedBytes.low >>> 0, message.stackUsedBytes.high >>> 0).toNumber(true) : message.stackUsedBytes;
        if (message.heapAllocatedBytes != null && message.hasOwnProperty("heapAllocatedBytes"))
            if (typeof message.heapAllocatedBytes === "number")
                object.heapAllocatedBytes = options.longs === String ? String(message.heapAllocatedBytes) : message.heapAllocatedBytes;
            else
                object.heapAllocatedBytes = options.longs === String ? $util.Long.prototype.toString.call(message.heapAllocatedBytes) : options.longs === Number ? new $util.LongBits(message.heapAllocatedBytes.low >>> 0, message.heapAllocatedBytes.high >>> 0).toNumber(true) : message.heapAllocatedBytes;
        if (message.heapAllocatedObjects != null && message.hasOwnProperty("heapAllocatedObjects"))
            if (typeof message.heapAllocatedObjects === "number")
                object.heapAllocatedObjects = options.longs === String ? String(message.heapAllocatedObjects) : message.heapAllocatedObjects;
            else
                object.heapAllocatedObjects = options.longs === String ? $util.Long.prototype.toString.call(message.heapAllocatedObjects) : options.longs === Number ? new $util.LongBits(message.heapAllocatedObjects.low >>> 0, message.heapAllocatedObjects.high >>> 0).toNumber(true) : message.heapAllocatedObjects;
        if (message.heapAllocatedBytesDelta != null && message.hasOwnProperty("heapAllocatedBytesDelta"))
            if (typeof message.heapAllocatedBytesDelta === "number")
                object.heapAllocatedBytesDelta = options.longs === String ? String(message.heapAllocatedBytesDelta) : message.heapAllocatedBytesDelta;
            else
                object.heapAllocatedBytesDelta = options.longs === String ? $util.Long.prototype.toString.call(message.heapAllocatedBytesDelta) : options.longs === Number ? new $util.LongBits(message.heapAllocatedBytesDelta.low >>> 0, message.heapAllocatedBytesDelta.high >>> 0).toNumber(true) : message.heapAllocatedBytesDelta;
        if (message.heapAllocatedObjectsDelta != null && message.hasOwnProperty("heapAllocatedObjectsDelta"))
            if (typeof message.heapAllocatedObjectsDelta === "number")
                object.heapAllocatedObjectsDelta = options.longs === String ? String(message.heapAllocatedObjectsDelta) : message.heapAllocatedObjectsDelta;
            else
                object.heapAllocatedObjectsDelta = options.longs === String ? $util.Long.prototype.toString.call(message.heapAllocatedObjectsDelta) : options.longs === Number ? new $util.LongBits(message.heapAllocatedObjectsDelta.low >>> 0, message.heapAllocatedObjectsDelta.high >>> 0).toNumber(true) : message.heapAllocatedObjectsDelta;
        if (message.heapFreedObjectsDelta != null && message.hasOwnProperty("heapFreedObjectsDelta"))
            if (typeof message.heapFreedObjectsDelta === "number")
                object.heapFreedObjectsDelta = options.longs === String ? String(message.heapFreedObjectsDelta) : message.heapFreedObjectsDelta;
            else
                object.heapFreedObjectsDelta = options.longs === String ? $util.Long.prototype.toString.call(message.heapFreedObjectsDelta) : options.longs === Number ? new $util.LongBits(message.heapFreedObjectsDelta.low >>> 0, message.heapFreedObjectsDelta.high >>> 0).toNumber(true) : message.heapFreedObjectsDelta;
        if (message.gcStwNsDelta != null && message.hasOwnProperty("gcStwNsDelta"))
            if (typeof message.gcStwNsDelta === "number")
                object.gcStwNsDelta = options.longs === String ? String(message.gcStwNsDelta) : message.gcStwNsDelta;
            else
                object.gcStwNsDelta = options.longs === String ? $util.Long.prototype.toString.call(message.gcStwNsDelta) : options.longs === Number ? new $util.LongBits(message.gcStwNsDelta.low >>> 0, message.gcStwNsDelta.high >>> 0).toNumber(true) : message.gcStwNsDelta;
        if (message.gcCountDelta != null && message.hasOwnProperty("gcCountDelta"))
            if (typeof message.gcCountDelta === "number")
                object.gcCountDelta = options.longs === String ? String(message.gcCountDelta) : message.gcCountDelta;
            else
                object.gcCountDelta = options.longs === String ? $util.Long.prototype.toString.call(message.gcCountDelta) : options.longs === Number ? new $util.LongBits(message.gcCountDelta.low >>> 0, message.gcCountDelta.high >>> 0).toNumber(true) : message.gcCountDelta;
        if (message.heapReleasedBytes != null && message.hasOwnProperty("heapReleasedBytes"))
            if (typeof message.heapReleasedBytes === "number")
                object.heapReleasedBytes = options.longs === String ? String(message.heapReleasedBytes) : message.heapReleasedBytes;
            else
                object.heapReleasedBytes = options.longs === String ? $util.Long.prototype.toString.call(message.heapReleasedBytes) : options.longs === Number ? new $util.LongBits(message.heapReleasedBytes.low >>> 0, message.heapReleasedBytes.high >>> 0).toNumber(true) : message.heapReleasedBytes;
        return object;
    };

    /**
     * Converts this MemStats to JSON.
     * @function toJSON
     * @memberof MemStats
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MemStats.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return MemStats;
})();

$root.TimeStats = (function() {

    /**
     * Properties of a TimeStats.
     * @exports ITimeStats
     * @interface ITimeStats
     * @property {number|null} [uptimeNs] TimeStats uptimeNs
     * @property {number|null} [realNsDelta] TimeStats realNsDelta
     * @property {number|null} [userNsDelta] TimeStats userNsDelta
     * @property {number|null} [sysNsDelta] TimeStats sysNsDelta
     */

    /**
     * Constructs a new TimeStats.
     * @exports TimeStats
     * @classdesc Represents a TimeStats.
     * @implements ITimeStats
     * @constructor
     * @param {ITimeStats=} [properties] Properties to set
     */
    function TimeStats(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TimeStats uptimeNs.
     * @member {number} uptimeNs
     * @memberof TimeStats
     * @instance
     */
    TimeStats.prototype.uptimeNs = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * TimeStats realNsDelta.
     * @member {number} realNsDelta
     * @memberof TimeStats
     * @instance
     */
    TimeStats.prototype.realNsDelta = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * TimeStats userNsDelta.
     * @member {number} userNsDelta
     * @memberof TimeStats
     * @instance
     */
    TimeStats.prototype.userNsDelta = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * TimeStats sysNsDelta.
     * @member {number} sysNsDelta
     * @memberof TimeStats
     * @instance
     */
    TimeStats.prototype.sysNsDelta = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new TimeStats instance using the specified properties.
     * @function create
     * @memberof TimeStats
     * @static
     * @param {ITimeStats=} [properties] Properties to set
     * @returns {TimeStats} TimeStats instance
     */
    TimeStats.create = function create(properties) {
        return new TimeStats(properties);
    };

    /**
     * Encodes the specified TimeStats message. Does not implicitly {@link TimeStats.verify|verify} messages.
     * @function encode
     * @memberof TimeStats
     * @static
     * @param {ITimeStats} message TimeStats message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TimeStats.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uptimeNs != null && Object.hasOwnProperty.call(message, "uptimeNs"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.uptimeNs);
        if (message.realNsDelta != null && Object.hasOwnProperty.call(message, "realNsDelta"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.realNsDelta);
        if (message.userNsDelta != null && Object.hasOwnProperty.call(message, "userNsDelta"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.userNsDelta);
        if (message.sysNsDelta != null && Object.hasOwnProperty.call(message, "sysNsDelta"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.sysNsDelta);
        return writer;
    };

    /**
     * Encodes the specified TimeStats message, length delimited. Does not implicitly {@link TimeStats.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TimeStats
     * @static
     * @param {ITimeStats} message TimeStats message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TimeStats.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TimeStats message from the specified reader or buffer.
     * @function decode
     * @memberof TimeStats
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TimeStats} TimeStats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TimeStats.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TimeStats();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.uptimeNs = reader.uint64();
                break;
            case 2:
                message.realNsDelta = reader.uint64();
                break;
            case 3:
                message.userNsDelta = reader.uint64();
                break;
            case 4:
                message.sysNsDelta = reader.uint64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TimeStats message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TimeStats
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TimeStats} TimeStats
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TimeStats.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TimeStats message.
     * @function verify
     * @memberof TimeStats
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TimeStats.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uptimeNs != null && message.hasOwnProperty("uptimeNs"))
            if (!$util.isInteger(message.uptimeNs) && !(message.uptimeNs && $util.isInteger(message.uptimeNs.low) && $util.isInteger(message.uptimeNs.high)))
                return "uptimeNs: integer|Long expected";
        if (message.realNsDelta != null && message.hasOwnProperty("realNsDelta"))
            if (!$util.isInteger(message.realNsDelta) && !(message.realNsDelta && $util.isInteger(message.realNsDelta.low) && $util.isInteger(message.realNsDelta.high)))
                return "realNsDelta: integer|Long expected";
        if (message.userNsDelta != null && message.hasOwnProperty("userNsDelta"))
            if (!$util.isInteger(message.userNsDelta) && !(message.userNsDelta && $util.isInteger(message.userNsDelta.low) && $util.isInteger(message.userNsDelta.high)))
                return "userNsDelta: integer|Long expected";
        if (message.sysNsDelta != null && message.hasOwnProperty("sysNsDelta"))
            if (!$util.isInteger(message.sysNsDelta) && !(message.sysNsDelta && $util.isInteger(message.sysNsDelta.low) && $util.isInteger(message.sysNsDelta.high)))
                return "sysNsDelta: integer|Long expected";
        return null;
    };

    /**
     * Creates a TimeStats message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TimeStats
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TimeStats} TimeStats
     */
    TimeStats.fromObject = function fromObject(object) {
        if (object instanceof $root.TimeStats)
            return object;
        var message = new $root.TimeStats();
        if (object.uptimeNs != null)
            if ($util.Long)
                (message.uptimeNs = $util.Long.fromValue(object.uptimeNs)).unsigned = true;
            else if (typeof object.uptimeNs === "string")
                message.uptimeNs = parseInt(object.uptimeNs, 10);
            else if (typeof object.uptimeNs === "number")
                message.uptimeNs = object.uptimeNs;
            else if (typeof object.uptimeNs === "object")
                message.uptimeNs = new $util.LongBits(object.uptimeNs.low >>> 0, object.uptimeNs.high >>> 0).toNumber(true);
        if (object.realNsDelta != null)
            if ($util.Long)
                (message.realNsDelta = $util.Long.fromValue(object.realNsDelta)).unsigned = true;
            else if (typeof object.realNsDelta === "string")
                message.realNsDelta = parseInt(object.realNsDelta, 10);
            else if (typeof object.realNsDelta === "number")
                message.realNsDelta = object.realNsDelta;
            else if (typeof object.realNsDelta === "object")
                message.realNsDelta = new $util.LongBits(object.realNsDelta.low >>> 0, object.realNsDelta.high >>> 0).toNumber(true);
        if (object.userNsDelta != null)
            if ($util.Long)
                (message.userNsDelta = $util.Long.fromValue(object.userNsDelta)).unsigned = true;
            else if (typeof object.userNsDelta === "string")
                message.userNsDelta = parseInt(object.userNsDelta, 10);
            else if (typeof object.userNsDelta === "number")
                message.userNsDelta = object.userNsDelta;
            else if (typeof object.userNsDelta === "object")
                message.userNsDelta = new $util.LongBits(object.userNsDelta.low >>> 0, object.userNsDelta.high >>> 0).toNumber(true);
        if (object.sysNsDelta != null)
            if ($util.Long)
                (message.sysNsDelta = $util.Long.fromValue(object.sysNsDelta)).unsigned = true;
            else if (typeof object.sysNsDelta === "string")
                message.sysNsDelta = parseInt(object.sysNsDelta, 10);
            else if (typeof object.sysNsDelta === "number")
                message.sysNsDelta = object.sysNsDelta;
            else if (typeof object.sysNsDelta === "object")
                message.sysNsDelta = new $util.LongBits(object.sysNsDelta.low >>> 0, object.sysNsDelta.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a TimeStats message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TimeStats
     * @static
     * @param {TimeStats} message TimeStats
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TimeStats.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.uptimeNs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.uptimeNs = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.realNsDelta = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.realNsDelta = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.userNsDelta = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.userNsDelta = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.sysNsDelta = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.sysNsDelta = options.longs === String ? "0" : 0;
        }
        if (message.uptimeNs != null && message.hasOwnProperty("uptimeNs"))
            if (typeof message.uptimeNs === "number")
                object.uptimeNs = options.longs === String ? String(message.uptimeNs) : message.uptimeNs;
            else
                object.uptimeNs = options.longs === String ? $util.Long.prototype.toString.call(message.uptimeNs) : options.longs === Number ? new $util.LongBits(message.uptimeNs.low >>> 0, message.uptimeNs.high >>> 0).toNumber(true) : message.uptimeNs;
        if (message.realNsDelta != null && message.hasOwnProperty("realNsDelta"))
            if (typeof message.realNsDelta === "number")
                object.realNsDelta = options.longs === String ? String(message.realNsDelta) : message.realNsDelta;
            else
                object.realNsDelta = options.longs === String ? $util.Long.prototype.toString.call(message.realNsDelta) : options.longs === Number ? new $util.LongBits(message.realNsDelta.low >>> 0, message.realNsDelta.high >>> 0).toNumber(true) : message.realNsDelta;
        if (message.userNsDelta != null && message.hasOwnProperty("userNsDelta"))
            if (typeof message.userNsDelta === "number")
                object.userNsDelta = options.longs === String ? String(message.userNsDelta) : message.userNsDelta;
            else
                object.userNsDelta = options.longs === String ? $util.Long.prototype.toString.call(message.userNsDelta) : options.longs === Number ? new $util.LongBits(message.userNsDelta.low >>> 0, message.userNsDelta.high >>> 0).toNumber(true) : message.userNsDelta;
        if (message.sysNsDelta != null && message.hasOwnProperty("sysNsDelta"))
            if (typeof message.sysNsDelta === "number")
                object.sysNsDelta = options.longs === String ? String(message.sysNsDelta) : message.sysNsDelta;
            else
                object.sysNsDelta = options.longs === String ? $util.Long.prototype.toString.call(message.sysNsDelta) : options.longs === Number ? new $util.LongBits(message.sysNsDelta.low >>> 0, message.sysNsDelta.high >>> 0).toNumber(true) : message.sysNsDelta;
        return object;
    };

    /**
     * Converts this TimeStats to JSON.
     * @function toJSON
     * @memberof TimeStats
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TimeStats.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return TimeStats;
})();

$root.StatsReport = (function() {

    /**
     * Properties of a StatsReport.
     * @exports IStatsReport
     * @interface IStatsReport
     * @property {IReportHeader|null} [header] StatsReport header
     * @property {IMemStats|null} [memStats] StatsReport memStats
     * @property {ITimeStats|null} [timeStats] StatsReport timeStats
     * @property {google.protobuf.ITimestamp|null} [startTime] StatsReport startTime
     * @property {google.protobuf.ITimestamp|null} [endTime] StatsReport endTime
     * @property {number|null} [realtimeDuration] StatsReport realtimeDuration
     * @property {Object.<string,IQueryStats>|null} [perQuery] StatsReport perQuery
     * @property {Object.<string,IQueryStats>|null} [legacyPerQueryImplicitOperationName] StatsReport legacyPerQueryImplicitOperationName
     * @property {Array.<IType>|null} [type] StatsReport type
     */

    /**
     * Constructs a new StatsReport.
     * @exports StatsReport
     * @classdesc Represents a StatsReport.
     * @implements IStatsReport
     * @constructor
     * @param {IStatsReport=} [properties] Properties to set
     */
    function StatsReport(properties) {
        this.perQuery = {};
        this.legacyPerQueryImplicitOperationName = {};
        this.type = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * StatsReport header.
     * @member {IReportHeader|null|undefined} header
     * @memberof StatsReport
     * @instance
     */
    StatsReport.prototype.header = null;

    /**
     * StatsReport memStats.
     * @member {IMemStats|null|undefined} memStats
     * @memberof StatsReport
     * @instance
     */
    StatsReport.prototype.memStats = null;

    /**
     * StatsReport timeStats.
     * @member {ITimeStats|null|undefined} timeStats
     * @memberof StatsReport
     * @instance
     */
    StatsReport.prototype.timeStats = null;

    /**
     * StatsReport startTime.
     * @member {google.protobuf.ITimestamp|null|undefined} startTime
     * @memberof StatsReport
     * @instance
     */
    StatsReport.prototype.startTime = null;

    /**
     * StatsReport endTime.
     * @member {google.protobuf.ITimestamp|null|undefined} endTime
     * @memberof StatsReport
     * @instance
     */
    StatsReport.prototype.endTime = null;

    /**
     * StatsReport realtimeDuration.
     * @member {number} realtimeDuration
     * @memberof StatsReport
     * @instance
     */
    StatsReport.prototype.realtimeDuration = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * StatsReport perQuery.
     * @member {Object.<string,IQueryStats>} perQuery
     * @memberof StatsReport
     * @instance
     */
    StatsReport.prototype.perQuery = $util.emptyObject;

    /**
     * StatsReport legacyPerQueryImplicitOperationName.
     * @member {Object.<string,IQueryStats>} legacyPerQueryImplicitOperationName
     * @memberof StatsReport
     * @instance
     */
    StatsReport.prototype.legacyPerQueryImplicitOperationName = $util.emptyObject;

    /**
     * StatsReport type.
     * @member {Array.<IType>} type
     * @memberof StatsReport
     * @instance
     */
    StatsReport.prototype.type = $util.emptyArray;

    /**
     * Creates a new StatsReport instance using the specified properties.
     * @function create
     * @memberof StatsReport
     * @static
     * @param {IStatsReport=} [properties] Properties to set
     * @returns {StatsReport} StatsReport instance
     */
    StatsReport.create = function create(properties) {
        return new StatsReport(properties);
    };

    /**
     * Encodes the specified StatsReport message. Does not implicitly {@link StatsReport.verify|verify} messages.
     * @function encode
     * @memberof StatsReport
     * @static
     * @param {IStatsReport} message StatsReport message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StatsReport.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.header != null && Object.hasOwnProperty.call(message, "header"))
            $root.ReportHeader.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.memStats != null && Object.hasOwnProperty.call(message, "memStats"))
            $root.MemStats.encode(message.memStats, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.timeStats != null && Object.hasOwnProperty.call(message, "timeStats"))
            $root.TimeStats.encode(message.timeStats, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.startTime != null && Object.hasOwnProperty.call(message, "startTime"))
            $root.google.protobuf.Timestamp.encode(message.startTime, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.endTime != null && Object.hasOwnProperty.call(message, "endTime"))
            $root.google.protobuf.Timestamp.encode(message.endTime, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.realtimeDuration != null && Object.hasOwnProperty.call(message, "realtimeDuration"))
            writer.uint32(/* id 10, wireType 0 =*/80).uint64(message.realtimeDuration);
        if (message.legacyPerQueryImplicitOperationName != null && Object.hasOwnProperty.call(message, "legacyPerQueryImplicitOperationName"))
            for (var keys = Object.keys(message.legacyPerQueryImplicitOperationName), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 12, wireType 2 =*/98).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                $root.QueryStats.encode(message.legacyPerQueryImplicitOperationName[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.type != null && message.type.length)
            for (var i = 0; i < message.type.length; ++i)
                $root.Type.encode(message.type[i], writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
        if (message.perQuery != null && Object.hasOwnProperty.call(message, "perQuery"))
            for (var keys = Object.keys(message.perQuery), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 14, wireType 2 =*/114).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                $root.QueryStats.encode(message.perQuery[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        return writer;
    };

    /**
     * Encodes the specified StatsReport message, length delimited. Does not implicitly {@link StatsReport.verify|verify} messages.
     * @function encodeDelimited
     * @memberof StatsReport
     * @static
     * @param {IStatsReport} message StatsReport message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StatsReport.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a StatsReport message from the specified reader or buffer.
     * @function decode
     * @memberof StatsReport
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {StatsReport} StatsReport
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StatsReport.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StatsReport(), key;
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.header = $root.ReportHeader.decode(reader, reader.uint32());
                break;
            case 2:
                message.memStats = $root.MemStats.decode(reader, reader.uint32());
                break;
            case 3:
                message.timeStats = $root.TimeStats.decode(reader, reader.uint32());
                break;
            case 8:
                message.startTime = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                break;
            case 9:
                message.endTime = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                break;
            case 10:
                message.realtimeDuration = reader.uint64();
                break;
            case 14:
                reader.skip().pos++;
                if (message.perQuery === $util.emptyObject)
                    message.perQuery = {};
                key = reader.string();
                reader.pos++;
                message.perQuery[key] = $root.QueryStats.decode(reader, reader.uint32());
                break;
            case 12:
                reader.skip().pos++;
                if (message.legacyPerQueryImplicitOperationName === $util.emptyObject)
                    message.legacyPerQueryImplicitOperationName = {};
                key = reader.string();
                reader.pos++;
                message.legacyPerQueryImplicitOperationName[key] = $root.QueryStats.decode(reader, reader.uint32());
                break;
            case 13:
                if (!(message.type && message.type.length))
                    message.type = [];
                message.type.push($root.Type.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a StatsReport message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof StatsReport
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {StatsReport} StatsReport
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StatsReport.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a StatsReport message.
     * @function verify
     * @memberof StatsReport
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    StatsReport.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.header != null && message.hasOwnProperty("header")) {
            var error = $root.ReportHeader.verify(message.header);
            if (error)
                return "header." + error;
        }
        if (message.memStats != null && message.hasOwnProperty("memStats")) {
            var error = $root.MemStats.verify(message.memStats);
            if (error)
                return "memStats." + error;
        }
        if (message.timeStats != null && message.hasOwnProperty("timeStats")) {
            var error = $root.TimeStats.verify(message.timeStats);
            if (error)
                return "timeStats." + error;
        }
        if (message.startTime != null && message.hasOwnProperty("startTime")) {
            var error = $root.google.protobuf.Timestamp.verify(message.startTime);
            if (error)
                return "startTime." + error;
        }
        if (message.endTime != null && message.hasOwnProperty("endTime")) {
            var error = $root.google.protobuf.Timestamp.verify(message.endTime);
            if (error)
                return "endTime." + error;
        }
        if (message.realtimeDuration != null && message.hasOwnProperty("realtimeDuration"))
            if (!$util.isInteger(message.realtimeDuration) && !(message.realtimeDuration && $util.isInteger(message.realtimeDuration.low) && $util.isInteger(message.realtimeDuration.high)))
                return "realtimeDuration: integer|Long expected";
        if (message.perQuery != null && message.hasOwnProperty("perQuery")) {
            if (!$util.isObject(message.perQuery))
                return "perQuery: object expected";
            var key = Object.keys(message.perQuery);
            for (var i = 0; i < key.length; ++i) {
                var error = $root.QueryStats.verify(message.perQuery[key[i]]);
                if (error)
                    return "perQuery." + error;
            }
        }
        if (message.legacyPerQueryImplicitOperationName != null && message.hasOwnProperty("legacyPerQueryImplicitOperationName")) {
            if (!$util.isObject(message.legacyPerQueryImplicitOperationName))
                return "legacyPerQueryImplicitOperationName: object expected";
            var key = Object.keys(message.legacyPerQueryImplicitOperationName);
            for (var i = 0; i < key.length; ++i) {
                var error = $root.QueryStats.verify(message.legacyPerQueryImplicitOperationName[key[i]]);
                if (error)
                    return "legacyPerQueryImplicitOperationName." + error;
            }
        }
        if (message.type != null && message.hasOwnProperty("type")) {
            if (!Array.isArray(message.type))
                return "type: array expected";
            for (var i = 0; i < message.type.length; ++i) {
                var error = $root.Type.verify(message.type[i]);
                if (error)
                    return "type." + error;
            }
        }
        return null;
    };

    /**
     * Creates a StatsReport message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof StatsReport
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {StatsReport} StatsReport
     */
    StatsReport.fromObject = function fromObject(object) {
        if (object instanceof $root.StatsReport)
            return object;
        var message = new $root.StatsReport();
        if (object.header != null) {
            if (typeof object.header !== "object")
                throw TypeError(".StatsReport.header: object expected");
            message.header = $root.ReportHeader.fromObject(object.header);
        }
        if (object.memStats != null) {
            if (typeof object.memStats !== "object")
                throw TypeError(".StatsReport.memStats: object expected");
            message.memStats = $root.MemStats.fromObject(object.memStats);
        }
        if (object.timeStats != null) {
            if (typeof object.timeStats !== "object")
                throw TypeError(".StatsReport.timeStats: object expected");
            message.timeStats = $root.TimeStats.fromObject(object.timeStats);
        }
        if (object.startTime != null) {
            if (typeof object.startTime !== "object")
                throw TypeError(".StatsReport.startTime: object expected");
            message.startTime = $root.google.protobuf.Timestamp.fromObject(object.startTime);
        }
        if (object.endTime != null) {
            if (typeof object.endTime !== "object")
                throw TypeError(".StatsReport.endTime: object expected");
            message.endTime = $root.google.protobuf.Timestamp.fromObject(object.endTime);
        }
        if (object.realtimeDuration != null)
            if ($util.Long)
                (message.realtimeDuration = $util.Long.fromValue(object.realtimeDuration)).unsigned = true;
            else if (typeof object.realtimeDuration === "string")
                message.realtimeDuration = parseInt(object.realtimeDuration, 10);
            else if (typeof object.realtimeDuration === "number")
                message.realtimeDuration = object.realtimeDuration;
            else if (typeof object.realtimeDuration === "object")
                message.realtimeDuration = new $util.LongBits(object.realtimeDuration.low >>> 0, object.realtimeDuration.high >>> 0).toNumber(true);
        if (object.perQuery) {
            if (typeof object.perQuery !== "object")
                throw TypeError(".StatsReport.perQuery: object expected");
            message.perQuery = {};
            for (var keys = Object.keys(object.perQuery), i = 0; i < keys.length; ++i) {
                if (typeof object.perQuery[keys[i]] !== "object")
                    throw TypeError(".StatsReport.perQuery: object expected");
                message.perQuery[keys[i]] = $root.QueryStats.fromObject(object.perQuery[keys[i]]);
            }
        }
        if (object.legacyPerQueryImplicitOperationName) {
            if (typeof object.legacyPerQueryImplicitOperationName !== "object")
                throw TypeError(".StatsReport.legacyPerQueryImplicitOperationName: object expected");
            message.legacyPerQueryImplicitOperationName = {};
            for (var keys = Object.keys(object.legacyPerQueryImplicitOperationName), i = 0; i < keys.length; ++i) {
                if (typeof object.legacyPerQueryImplicitOperationName[keys[i]] !== "object")
                    throw TypeError(".StatsReport.legacyPerQueryImplicitOperationName: object expected");
                message.legacyPerQueryImplicitOperationName[keys[i]] = $root.QueryStats.fromObject(object.legacyPerQueryImplicitOperationName[keys[i]]);
            }
        }
        if (object.type) {
            if (!Array.isArray(object.type))
                throw TypeError(".StatsReport.type: array expected");
            message.type = [];
            for (var i = 0; i < object.type.length; ++i) {
                if (typeof object.type[i] !== "object")
                    throw TypeError(".StatsReport.type: object expected");
                message.type[i] = $root.Type.fromObject(object.type[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a StatsReport message. Also converts values to other types if specified.
     * @function toObject
     * @memberof StatsReport
     * @static
     * @param {StatsReport} message StatsReport
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    StatsReport.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.type = [];
        if (options.objects || options.defaults) {
            object.legacyPerQueryImplicitOperationName = {};
            object.perQuery = {};
        }
        if (options.defaults) {
            object.header = null;
            object.memStats = null;
            object.timeStats = null;
            object.startTime = null;
            object.endTime = null;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.realtimeDuration = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.realtimeDuration = options.longs === String ? "0" : 0;
        }
        if (message.header != null && message.hasOwnProperty("header"))
            object.header = $root.ReportHeader.toObject(message.header, options);
        if (message.memStats != null && message.hasOwnProperty("memStats"))
            object.memStats = $root.MemStats.toObject(message.memStats, options);
        if (message.timeStats != null && message.hasOwnProperty("timeStats"))
            object.timeStats = $root.TimeStats.toObject(message.timeStats, options);
        if (message.startTime != null && message.hasOwnProperty("startTime"))
            object.startTime = $root.google.protobuf.Timestamp.toObject(message.startTime, options);
        if (message.endTime != null && message.hasOwnProperty("endTime"))
            object.endTime = $root.google.protobuf.Timestamp.toObject(message.endTime, options);
        if (message.realtimeDuration != null && message.hasOwnProperty("realtimeDuration"))
            if (typeof message.realtimeDuration === "number")
                object.realtimeDuration = options.longs === String ? String(message.realtimeDuration) : message.realtimeDuration;
            else
                object.realtimeDuration = options.longs === String ? $util.Long.prototype.toString.call(message.realtimeDuration) : options.longs === Number ? new $util.LongBits(message.realtimeDuration.low >>> 0, message.realtimeDuration.high >>> 0).toNumber(true) : message.realtimeDuration;
        var keys2;
        if (message.legacyPerQueryImplicitOperationName && (keys2 = Object.keys(message.legacyPerQueryImplicitOperationName)).length) {
            object.legacyPerQueryImplicitOperationName = {};
            for (var j = 0; j < keys2.length; ++j)
                object.legacyPerQueryImplicitOperationName[keys2[j]] = $root.QueryStats.toObject(message.legacyPerQueryImplicitOperationName[keys2[j]], options);
        }
        if (message.type && message.type.length) {
            object.type = [];
            for (var j = 0; j < message.type.length; ++j)
                object.type[j] = $root.Type.toObject(message.type[j], options);
        }
        if (message.perQuery && (keys2 = Object.keys(message.perQuery)).length) {
            object.perQuery = {};
            for (var j = 0; j < keys2.length; ++j)
                object.perQuery[keys2[j]] = $root.QueryStats.toObject(message.perQuery[keys2[j]], options);
        }
        return object;
    };

    /**
     * Converts this StatsReport to JSON.
     * @function toJSON
     * @memberof StatsReport
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    StatsReport.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return StatsReport;
})();

$root.FullTracesReport = (function() {

    /**
     * Properties of a FullTracesReport.
     * @exports IFullTracesReport
     * @interface IFullTracesReport
     * @property {IReportHeader|null} [header] FullTracesReport header
     * @property {Object.<string,ITraces>|null} [tracesPerQuery] FullTracesReport tracesPerQuery
     */

    /**
     * Constructs a new FullTracesReport.
     * @exports FullTracesReport
     * @classdesc Represents a FullTracesReport.
     * @implements IFullTracesReport
     * @constructor
     * @param {IFullTracesReport=} [properties] Properties to set
     */
    function FullTracesReport(properties) {
        this.tracesPerQuery = {};
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FullTracesReport header.
     * @member {IReportHeader|null|undefined} header
     * @memberof FullTracesReport
     * @instance
     */
    FullTracesReport.prototype.header = null;

    /**
     * FullTracesReport tracesPerQuery.
     * @member {Object.<string,ITraces>} tracesPerQuery
     * @memberof FullTracesReport
     * @instance
     */
    FullTracesReport.prototype.tracesPerQuery = $util.emptyObject;

    /**
     * Creates a new FullTracesReport instance using the specified properties.
     * @function create
     * @memberof FullTracesReport
     * @static
     * @param {IFullTracesReport=} [properties] Properties to set
     * @returns {FullTracesReport} FullTracesReport instance
     */
    FullTracesReport.create = function create(properties) {
        return new FullTracesReport(properties);
    };

    /**
     * Encodes the specified FullTracesReport message. Does not implicitly {@link FullTracesReport.verify|verify} messages.
     * @function encode
     * @memberof FullTracesReport
     * @static
     * @param {IFullTracesReport} message FullTracesReport message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FullTracesReport.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.header != null && Object.hasOwnProperty.call(message, "header"))
            $root.ReportHeader.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.tracesPerQuery != null && Object.hasOwnProperty.call(message, "tracesPerQuery"))
            for (var keys = Object.keys(message.tracesPerQuery), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 5, wireType 2 =*/42).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                $root.Traces.encode(message.tracesPerQuery[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        return writer;
    };

    /**
     * Encodes the specified FullTracesReport message, length delimited. Does not implicitly {@link FullTracesReport.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FullTracesReport
     * @static
     * @param {IFullTracesReport} message FullTracesReport message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FullTracesReport.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a FullTracesReport message from the specified reader or buffer.
     * @function decode
     * @memberof FullTracesReport
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FullTracesReport} FullTracesReport
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FullTracesReport.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FullTracesReport(), key;
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.header = $root.ReportHeader.decode(reader, reader.uint32());
                break;
            case 5:
                reader.skip().pos++;
                if (message.tracesPerQuery === $util.emptyObject)
                    message.tracesPerQuery = {};
                key = reader.string();
                reader.pos++;
                message.tracesPerQuery[key] = $root.Traces.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a FullTracesReport message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FullTracesReport
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FullTracesReport} FullTracesReport
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FullTracesReport.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FullTracesReport message.
     * @function verify
     * @memberof FullTracesReport
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FullTracesReport.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.header != null && message.hasOwnProperty("header")) {
            var error = $root.ReportHeader.verify(message.header);
            if (error)
                return "header." + error;
        }
        if (message.tracesPerQuery != null && message.hasOwnProperty("tracesPerQuery")) {
            if (!$util.isObject(message.tracesPerQuery))
                return "tracesPerQuery: object expected";
            var key = Object.keys(message.tracesPerQuery);
            for (var i = 0; i < key.length; ++i) {
                var error = $root.Traces.verify(message.tracesPerQuery[key[i]]);
                if (error)
                    return "tracesPerQuery." + error;
            }
        }
        return null;
    };

    /**
     * Creates a FullTracesReport message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FullTracesReport
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FullTracesReport} FullTracesReport
     */
    FullTracesReport.fromObject = function fromObject(object) {
        if (object instanceof $root.FullTracesReport)
            return object;
        var message = new $root.FullTracesReport();
        if (object.header != null) {
            if (typeof object.header !== "object")
                throw TypeError(".FullTracesReport.header: object expected");
            message.header = $root.ReportHeader.fromObject(object.header);
        }
        if (object.tracesPerQuery) {
            if (typeof object.tracesPerQuery !== "object")
                throw TypeError(".FullTracesReport.tracesPerQuery: object expected");
            message.tracesPerQuery = {};
            for (var keys = Object.keys(object.tracesPerQuery), i = 0; i < keys.length; ++i) {
                if (typeof object.tracesPerQuery[keys[i]] !== "object")
                    throw TypeError(".FullTracesReport.tracesPerQuery: object expected");
                message.tracesPerQuery[keys[i]] = $root.Traces.fromObject(object.tracesPerQuery[keys[i]]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a FullTracesReport message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FullTracesReport
     * @static
     * @param {FullTracesReport} message FullTracesReport
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FullTracesReport.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.objects || options.defaults)
            object.tracesPerQuery = {};
        if (options.defaults)
            object.header = null;
        if (message.header != null && message.hasOwnProperty("header"))
            object.header = $root.ReportHeader.toObject(message.header, options);
        var keys2;
        if (message.tracesPerQuery && (keys2 = Object.keys(message.tracesPerQuery)).length) {
            object.tracesPerQuery = {};
            for (var j = 0; j < keys2.length; ++j)
                object.tracesPerQuery[keys2[j]] = $root.Traces.toObject(message.tracesPerQuery[keys2[j]], options);
        }
        return object;
    };

    /**
     * Converts this FullTracesReport to JSON.
     * @function toJSON
     * @memberof FullTracesReport
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FullTracesReport.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return FullTracesReport;
})();

$root.Traces = (function() {

    /**
     * Properties of a Traces.
     * @exports ITraces
     * @interface ITraces
     * @property {Array.<ITrace>|null} [trace] Traces trace
     */

    /**
     * Constructs a new Traces.
     * @exports Traces
     * @classdesc Represents a Traces.
     * @implements ITraces
     * @constructor
     * @param {ITraces=} [properties] Properties to set
     */
    function Traces(properties) {
        this.trace = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Traces trace.
     * @member {Array.<ITrace>} trace
     * @memberof Traces
     * @instance
     */
    Traces.prototype.trace = $util.emptyArray;

    /**
     * Creates a new Traces instance using the specified properties.
     * @function create
     * @memberof Traces
     * @static
     * @param {ITraces=} [properties] Properties to set
     * @returns {Traces} Traces instance
     */
    Traces.create = function create(properties) {
        return new Traces(properties);
    };

    /**
     * Encodes the specified Traces message. Does not implicitly {@link Traces.verify|verify} messages.
     * @function encode
     * @memberof Traces
     * @static
     * @param {ITraces} message Traces message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Traces.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.trace != null && message.trace.length)
            for (var i = 0; i < message.trace.length; ++i)
                $root.Trace.encode(message.trace[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Traces message, length delimited. Does not implicitly {@link Traces.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Traces
     * @static
     * @param {ITraces} message Traces message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Traces.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Traces message from the specified reader or buffer.
     * @function decode
     * @memberof Traces
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Traces} Traces
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Traces.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Traces();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.trace && message.trace.length))
                    message.trace = [];
                message.trace.push($root.Trace.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Traces message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Traces
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Traces} Traces
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Traces.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Traces message.
     * @function verify
     * @memberof Traces
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Traces.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.trace != null && message.hasOwnProperty("trace")) {
            if (!Array.isArray(message.trace))
                return "trace: array expected";
            for (var i = 0; i < message.trace.length; ++i) {
                var error = $root.Trace.verify(message.trace[i]);
                if (error)
                    return "trace." + error;
            }
        }
        return null;
    };

    /**
     * Creates a Traces message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Traces
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Traces} Traces
     */
    Traces.fromObject = function fromObject(object) {
        if (object instanceof $root.Traces)
            return object;
        var message = new $root.Traces();
        if (object.trace) {
            if (!Array.isArray(object.trace))
                throw TypeError(".Traces.trace: array expected");
            message.trace = [];
            for (var i = 0; i < object.trace.length; ++i) {
                if (typeof object.trace[i] !== "object")
                    throw TypeError(".Traces.trace: object expected");
                message.trace[i] = $root.Trace.fromObject(object.trace[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a Traces message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Traces
     * @static
     * @param {Traces} message Traces
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Traces.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.trace = [];
        if (message.trace && message.trace.length) {
            object.trace = [];
            for (var j = 0; j < message.trace.length; ++j)
                object.trace[j] = $root.Trace.toObject(message.trace[j], options);
        }
        return object;
    };

    /**
     * Converts this Traces to JSON.
     * @function toJSON
     * @memberof Traces
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Traces.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Traces;
})();

$root.TraceV1 = (function() {

    /**
     * Properties of a TraceV1.
     * @exports ITraceV1
     * @interface ITraceV1
     * @property {IReportHeader|null} [header] TraceV1 header
     * @property {ITrace|null} [trace] TraceV1 trace
     */

    /**
     * Constructs a new TraceV1.
     * @exports TraceV1
     * @classdesc Represents a TraceV1.
     * @implements ITraceV1
     * @constructor
     * @param {ITraceV1=} [properties] Properties to set
     */
    function TraceV1(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TraceV1 header.
     * @member {IReportHeader|null|undefined} header
     * @memberof TraceV1
     * @instance
     */
    TraceV1.prototype.header = null;

    /**
     * TraceV1 trace.
     * @member {ITrace|null|undefined} trace
     * @memberof TraceV1
     * @instance
     */
    TraceV1.prototype.trace = null;

    /**
     * Creates a new TraceV1 instance using the specified properties.
     * @function create
     * @memberof TraceV1
     * @static
     * @param {ITraceV1=} [properties] Properties to set
     * @returns {TraceV1} TraceV1 instance
     */
    TraceV1.create = function create(properties) {
        return new TraceV1(properties);
    };

    /**
     * Encodes the specified TraceV1 message. Does not implicitly {@link TraceV1.verify|verify} messages.
     * @function encode
     * @memberof TraceV1
     * @static
     * @param {ITraceV1} message TraceV1 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TraceV1.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.header != null && Object.hasOwnProperty.call(message, "header"))
            $root.ReportHeader.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.trace != null && Object.hasOwnProperty.call(message, "trace"))
            $root.Trace.encode(message.trace, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified TraceV1 message, length delimited. Does not implicitly {@link TraceV1.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TraceV1
     * @static
     * @param {ITraceV1} message TraceV1 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TraceV1.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TraceV1 message from the specified reader or buffer.
     * @function decode
     * @memberof TraceV1
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TraceV1} TraceV1
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TraceV1.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TraceV1();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.header = $root.ReportHeader.decode(reader, reader.uint32());
                break;
            case 2:
                message.trace = $root.Trace.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TraceV1 message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TraceV1
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TraceV1} TraceV1
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TraceV1.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TraceV1 message.
     * @function verify
     * @memberof TraceV1
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TraceV1.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.header != null && message.hasOwnProperty("header")) {
            var error = $root.ReportHeader.verify(message.header);
            if (error)
                return "header." + error;
        }
        if (message.trace != null && message.hasOwnProperty("trace")) {
            var error = $root.Trace.verify(message.trace);
            if (error)
                return "trace." + error;
        }
        return null;
    };

    /**
     * Creates a TraceV1 message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TraceV1
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TraceV1} TraceV1
     */
    TraceV1.fromObject = function fromObject(object) {
        if (object instanceof $root.TraceV1)
            return object;
        var message = new $root.TraceV1();
        if (object.header != null) {
            if (typeof object.header !== "object")
                throw TypeError(".TraceV1.header: object expected");
            message.header = $root.ReportHeader.fromObject(object.header);
        }
        if (object.trace != null) {
            if (typeof object.trace !== "object")
                throw TypeError(".TraceV1.trace: object expected");
            message.trace = $root.Trace.fromObject(object.trace);
        }
        return message;
    };

    /**
     * Creates a plain object from a TraceV1 message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TraceV1
     * @static
     * @param {TraceV1} message TraceV1
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TraceV1.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.header = null;
            object.trace = null;
        }
        if (message.header != null && message.hasOwnProperty("header"))
            object.header = $root.ReportHeader.toObject(message.header, options);
        if (message.trace != null && message.hasOwnProperty("trace"))
            object.trace = $root.Trace.toObject(message.trace, options);
        return object;
    };

    /**
     * Converts this TraceV1 to JSON.
     * @function toJSON
     * @memberof TraceV1
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TraceV1.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return TraceV1;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {number|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             */
            Timestamp.create = function create(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.seconds = reader.int64();
                        break;
                    case 2:
                        message.nanos = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
            Timestamp.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Timestamp)
                    return object;
                var message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp} message Timestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof google.protobuf.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Timestamp;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
