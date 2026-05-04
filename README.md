# kubb enum bug reproduction

Demonstrates that `@kubb/plugin-ts` (v4.37.5) generates incorrect types for response enums
that are properties of objects of arrays.

## Steps to reproduce

1. Install dependencies:

   ```sh
   pnpm install
   ```

2. Generate:

   ```sh
   pnpm generate
   ```

3. Open the generated `src/generated/types/GetPreferencesUnits.ts`:
   - The `GetPreferencesUnits200` type is generated as an array of the enum values, instead of an array of objects with a `type` property that is the enum.
   - When checking the generated `src/generated/types/Unit.ts`, the `Unit` enum is correctly generated.

## Expected behavior

The `GetPreferencesUnits200` type should be generated as an array of object with the same structure as Unit:

```ts
export type GetPreferencesUnits200 = {
  id: number;
  type: UnitTypeEnumKey;
  value: string;
}[];
```
