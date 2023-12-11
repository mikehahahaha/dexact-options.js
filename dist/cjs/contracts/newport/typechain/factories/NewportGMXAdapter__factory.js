"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewportGMXAdapter__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "thrower",
                type: "address",
            },
        ],
        name: "AllMarketsPaused",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "thrower",
                type: "address",
            },
            {
                internalType: "contract IERC20Decimals",
                name: "asset",
                type: "address",
            },
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                internalType: "address",
                name: "receiver",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "AssetTransferFailed",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "thrower",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amountQuoteRequested",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "baseToSpend",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "baseLimit",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "spotPrice",
                type: "uint256",
            },
            {
                internalType: "bytes32",
                name: "baseKey",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "quoteKey",
                type: "bytes32",
            },
        ],
        name: "BaseQuoteExchangeExceedsLimit",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "thrower",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amountOut",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "minAcceptedOut",
                type: "uint256",
            },
            {
                internalType: "contract IERC20Decimals",
                name: "tokenIn",
                type: "address",
            },
            {
                internalType: "contract IERC20Decimals",
                name: "tokenOut",
                type: "address",
            },
            {
                internalType: "address",
                name: "receiver",
                type: "address",
            },
        ],
        name: "InsufficientSwap",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "thrower",
                type: "address",
            },
            {
                internalType: "address",
                name: "inputAddress",
                type: "address",
            },
        ],
        name: "InvalidAddress",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "thrower",
                type: "address",
            },
            {
                internalType: "int256",
                name: "answer",
                type: "int256",
            },
            {
                internalType: "uint256",
                name: "updatedAt",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "blockTimestamp",
                type: "uint256",
            },
        ],
        name: "InvalidAnswer",
        type: "error",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "staticSwapFeeEstimate",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "gmxUsageThreshold",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "priceVarianceCBPercent",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "chainlinkStalenessCheck",
                        type: "uint256",
                    },
                ],
                internalType: "struct GMXAdapter.MarketPricingParams",
                name: "params",
                type: "tuple",
            },
        ],
        name: "InvalidMarketPricingParams",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "thrower",
                type: "address",
            },
            {
                internalType: "contract AggregatorV2V3Interface",
                name: "inputAddress",
                type: "address",
            },
        ],
        name: "InvalidPriceFeedAddress",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidRiskFreeRate",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidStaticSwapFeeEstimate",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "thrower",
                type: "address",
            },
            {
                internalType: "address",
                name: "marketAddress",
                type: "address",
            },
        ],
        name: "MarketIsPaused",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "thrower",
                type: "address",
            },
        ],
        name: "NotImplemented",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "thrower",
                type: "address",
            },
            {
                internalType: "address",
                name: "caller",
                type: "address",
            },
            {
                internalType: "address",
                name: "nominatedOwner",
                type: "address",
            },
        ],
        name: "OnlyNominatedOwner",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "thrower",
                type: "address",
            },
            {
                internalType: "address",
                name: "caller",
                type: "address",
            },
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "OnlyOwner",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "thrower",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "minPrice",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "maxPrice",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "clPrice",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "priceVarianceCBPercent",
                type: "uint256",
            },
        ],
        name: "PriceVarianceTooHigh",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "thrower",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amountBaseRequested",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "quoteToSpend",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "quoteLimit",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "spotPrice",
                type: "uint256",
            },
            {
                internalType: "bytes32",
                name: "quoteKey",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "baseKey",
                type: "bytes32",
            },
        ],
        name: "QuoteBaseExchangeExceedsLimit",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "thrower",
                type: "address",
            },
            {
                internalType: "contract IERC20Decimals",
                name: "asset",
                type: "address",
            },
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "TransferFailed",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "marketAddress",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "exchanger",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "baseSwapped",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "quoteReceived",
                type: "uint256",
            },
        ],
        name: "BaseSwappedForQuote",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "asset",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "aggregator",
                type: "address",
            },
        ],
        name: "ChainlinkAggregatorUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "vault",
                type: "address",
            },
        ],
        name: "GMXVaultAddressUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bool",
                name: "isPaused",
                type: "bool",
            },
        ],
        name: "GlobalPausedSet",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "contractAddress",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "isPaused",
                type: "bool",
            },
        ],
        name: "MarketPausedSet",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "optionMarket",
                type: "address",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "staticSwapFeeEstimate",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "gmxUsageThreshold",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "priceVarianceCBPercent",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "chainlinkStalenessCheck",
                        type: "uint256",
                    },
                ],
                indexed: false,
                internalType: "struct GMXAdapter.MarketPricingParams",
                name: "marketPricingParams",
                type: "tuple",
            },
        ],
        name: "MarketPricingParamsUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "oldOwner",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnerChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnerNominated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "marketAddress",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "exchanger",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "quoteSwapped",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "baseReceived",
                type: "uint256",
            },
        ],
        name: "QuoteSwappedForBase",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "optionMarket",
                type: "address",
            },
            {
                indexed: false,
                internalType: "int256",
                name: "newRate",
                type: "int256",
            },
        ],
        name: "RiskFreeRateUpdated",
        type: "event",
    },
    {
        inputs: [],
        name: "GMX_PRICE_PRECISION",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "acceptOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "chainlinkFeeds",
        outputs: [
            {
                internalType: "contract AggregatorV2V3Interface",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_optionMarket",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amountBase",
                type: "uint256",
            },
        ],
        name: "estimateExchangeToExactBase",
        outputs: [
            {
                internalType: "uint256",
                name: "quoteNeeded",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_optionMarket",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amountQuote",
                type: "uint256",
            },
        ],
        name: "estimateExchangeToExactQuote",
        outputs: [
            {
                internalType: "uint256",
                name: "baseNeeded",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_optionMarket",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amountBase",
                type: "uint256",
            },
        ],
        name: "exchangeFromExactBase",
        outputs: [
            {
                internalType: "uint256",
                name: "quoteReceived",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "optionMarket",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amountQuote",
                type: "uint256",
            },
        ],
        name: "exchangeFromExactQuote",
        outputs: [
            {
                internalType: "uint256",
                name: "baseReceived",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "optionMarket",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amountBase",
                type: "uint256",
            },
        ],
        name: "exchangeToExactBase",
        outputs: [
            {
                internalType: "uint256",
                name: "quoteSpent",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "baseReceived",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_optionMarket",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amountBase",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_quoteLimit",
                type: "uint256",
            },
        ],
        name: "exchangeToExactBaseWithLimit",
        outputs: [
            {
                internalType: "uint256",
                name: "quoteSpent",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "baseReceived",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "optionMarket",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amountQuote",
                type: "uint256",
            },
        ],
        name: "exchangeToExactQuote",
        outputs: [
            {
                internalType: "uint256",
                name: "baseSpent",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "quoteReceived",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "optionMarket",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amountQuote",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "baseLimit",
                type: "uint256",
            },
        ],
        name: "exchangeToExactQuoteWithLimit",
        outputs: [
            {
                internalType: "uint256",
                name: "quoteSpent",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "baseReceived",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_optionMarket",
                type: "address",
            },
        ],
        name: "getAdapterState",
        outputs: [
            {
                components: [
                    {
                        internalType: "contract AggregatorV2V3Interface",
                        name: "chainlinkFeed",
                        type: "address",
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "staticSwapFeeEstimate",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "gmxUsageThreshold",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "priceVarianceCBPercent",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "chainlinkStalenessCheck",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct GMXAdapter.MarketPricingParams",
                        name: "marketPricingParams",
                        type: "tuple",
                    },
                    {
                        internalType: "int256",
                        name: "rateAndCarry",
                        type: "int256",
                    },
                    {
                        internalType: "uint256",
                        name: "clPrice",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "gmxMinPrice",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "gmxMaxPrice",
                        type: "uint256",
                    },
                ],
                internalType: "struct GMXAdapter.GMXAdapterState",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "optionMarket",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "getSettlementPriceForMarket",
        outputs: [
            {
                internalType: "uint256",
                name: "spotPrice",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "optionMarket",
                type: "address",
            },
            {
                internalType: "enum BaseExchangeAdapter.PriceType",
                name: "pricing",
                type: "uint8",
            },
        ],
        name: "getSpotPriceForMarket",
        outputs: [
            {
                internalType: "uint256",
                name: "spotPrice",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "isGlobalPaused",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "isMarketPaused",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "marketPricingParams",
        outputs: [
            {
                internalType: "uint256",
                name: "staticSwapFeeEstimate",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "gmxUsageThreshold",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "priceVarianceCBPercent",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "chainlinkStalenessCheck",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_owner",
                type: "address",
            },
        ],
        name: "nominateNewOwner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "nominatedOwner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "rateAndCarry",
        outputs: [
            {
                internalType: "int256",
                name: "",
                type: "int256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "optionMarket",
                type: "address",
            },
        ],
        name: "requireNotGlobalPaused",
        outputs: [],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "optionMarket",
                type: "address",
            },
        ],
        name: "requireNotMarketPaused",
        outputs: [],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_asset",
                type: "address",
            },
            {
                internalType: "contract AggregatorV2V3Interface",
                name: "_assetPriceFeed",
                type: "address",
            },
        ],
        name: "setChainlinkFeed",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bool",
                name: "isPaused",
                type: "bool",
            },
        ],
        name: "setGlobalPaused",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "optionMarket",
                type: "address",
            },
            {
                internalType: "bool",
                name: "isPaused",
                type: "bool",
            },
        ],
        name: "setMarketPaused",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_optionMarket",
                type: "address",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "staticSwapFeeEstimate",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "gmxUsageThreshold",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "priceVarianceCBPercent",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "chainlinkStalenessCheck",
                        type: "uint256",
                    },
                ],
                internalType: "struct GMXAdapter.MarketPricingParams",
                name: "_marketPricingParams",
                type: "tuple",
            },
        ],
        name: "setMarketPricingParams",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_optionMarket",
                type: "address",
            },
            {
                internalType: "int256",
                name: "_rate",
                type: "int256",
            },
        ],
        name: "setRiskFreeRate",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IVault",
                name: "_vault",
                type: "address",
            },
        ],
        name: "setVaultContract",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "vault",
        outputs: [
            {
                internalType: "contract IVault",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
var NewportGMXAdapter__factory = /** @class */ (function () {
    function NewportGMXAdapter__factory() {
    }
    NewportGMXAdapter__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    NewportGMXAdapter__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    NewportGMXAdapter__factory.abi = _abi;
    return NewportGMXAdapter__factory;
}());
exports.NewportGMXAdapter__factory = NewportGMXAdapter__factory;
//# sourceMappingURL=NewportGMXAdapter__factory.js.map