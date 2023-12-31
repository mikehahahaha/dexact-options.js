import fetchAllPositionDataByOwner from './fetchAllPositionDataByOwner';
import fetchOpenPositionDataByOwner from './fetchOpenPositionDataByOwner';
import getUniqueBy from './getUniqueBy';
export default async function fetchPositionDataByOwner(lyra, owner) {
    const [openPositions, allPositions] = await Promise.all([
        // Contract (realtime) data
        fetchOpenPositionDataByOwner(lyra, owner),
        // Subgraph data
        fetchAllPositionDataByOwner(lyra, owner),
    ]);
    const positions = openPositions.concat(allPositions);
    // Prefer position struct data over position subgrpah data
    return getUniqueBy(positions, p => p.id);
}
//# sourceMappingURL=fetchPositionDataByOwner.js.map