import { GameData } from '../@types/GameData'

import { beginningEntries } from './dialogs/beginningEntries'

import { pathForest } from './dialogs/path/forest'
import { pathMountain } from './dialogs/path/mountain'

import { dungeonEntrance } from './dialogs/village/dungeon/entrance'
import { dungeonHouse } from './dialogs/village/dungeon/house'
import { dungeonVenture } from './dialogs/village/dungeon/venture'

import { villageEntry } from './dialogs/village/entry'
import { villageHouse } from './dialogs/village/house'

import { tavernEntrance } from './dialogs/village/tavern/entrance'
import { tavernInside } from './dialogs/village/tavern/inside'

export const gameData: GameData = {
  game: 'Stupid Adventure',
  version: '0.0.1',
  dialogs: [
    ...beginningEntries,
    // path
    ...pathForest,
    pathMountain,
    // village
    villageEntry,
    // house
    ...villageHouse,
    // dungeon
    dungeonEntrance,
    ...dungeonHouse,
    ...dungeonVenture,
    // tavern
    ...tavernEntrance,
    ...tavernInside,
  ],
}
