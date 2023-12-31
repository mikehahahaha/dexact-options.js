import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface MultiDistributorInterface extends utils.Interface {
    functions: {
        "claim(address[])": FunctionFragment;
        "claimableBalances(address,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "claim" | "claimableBalances"): FunctionFragment;
    encodeFunctionData(functionFragment: "claim", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "claimableBalances", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimableBalances", data: BytesLike): Result;
    events: {
        "ClaimAdded(address,address,uint256,uint256,string)": EventFragment;
        "Claimed(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ClaimAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Claimed"): EventFragment;
}
export interface ClaimAddedEventObject {
    rewardToken: string;
    claimer: string;
    amount: BigNumber;
    epochTimestamp: BigNumber;
    tag: string;
}
export type ClaimAddedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber,
    string
], ClaimAddedEventObject>;
export type ClaimAddedEventFilter = TypedEventFilter<ClaimAddedEvent>;
export interface ClaimedEventObject {
    rewardToken: string;
    claimer: string;
    amount: BigNumber;
}
export type ClaimedEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ClaimedEventObject>;
export type ClaimedEventFilter = TypedEventFilter<ClaimedEvent>;
export interface MultiDistributor extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MultiDistributorInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        claim(tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        claimableBalances(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    claim(tokens: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    claimableBalances(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        claim(tokens: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        claimableBalances(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "ClaimAdded(address,address,uint256,uint256,string)"(rewardToken?: PromiseOrValue<string> | null, claimer?: PromiseOrValue<string> | null, amount?: null, epochTimestamp?: PromiseOrValue<BigNumberish> | null, tag?: null): ClaimAddedEventFilter;
        ClaimAdded(rewardToken?: PromiseOrValue<string> | null, claimer?: PromiseOrValue<string> | null, amount?: null, epochTimestamp?: PromiseOrValue<BigNumberish> | null, tag?: null): ClaimAddedEventFilter;
        "Claimed(address,address,uint256)"(rewardToken?: PromiseOrValue<string> | null, claimer?: PromiseOrValue<string> | null, amount?: null): ClaimedEventFilter;
        Claimed(rewardToken?: PromiseOrValue<string> | null, claimer?: PromiseOrValue<string> | null, amount?: null): ClaimedEventFilter;
    };
    estimateGas: {
        claim(tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        claimableBalances(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        claim(tokens: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        claimableBalances(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
