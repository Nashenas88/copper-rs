searchState.loadedDescShard("zerocopy", 0, "<em>Need more out of zerocopy? Submit a customer request issue!</em>\nA mutable or immutable reference to a byte slice.\nA mutable reference to a byte slice.\nTypes for which any bit pattern is valid.\nTypes for which a sequence of bytes all set to zero …\nA <code>ByteSlice</code> that conveys no ownership, and so can be …\nA <code>ByteSliceMut</code> that conveys no ownership, and so can be …\nTypes that can be converted to an immutable slice of …\nA trait which carries information about a type’s layout …\nTypes which do not contain any <code>UnsafeCell</code>s.\nA typed reference derived from a byte slice.\nTypes for which some bit patterns are valid.\nA type with no alignment requirement.\nTypes with no alignment requirement.\nGets the bytes of this value.\nGets the bytes of this value mutably.\nGets a mutable raw pointer to the first byte in the slice.\nGets a raw pointer to the first byte in the slice.\nByte order-aware numeric primitives.\nGets the underlying bytes.\nGets the underlying bytes mutably.\nReturns a mutable reference to the wrapped <code>T</code> without …\nReturns a reference to the wrapped <code>T</code> without checking …\nReturns the argument unchanged.\nReturns the argument unchanged.\nGets a copy of the inner <code>T</code>.\nGets an unaligned mutable raw pointer to the inner <code>T</code>.\nGets an unaligned raw pointer to the inner <code>T</code>.\nIncludes a file and safely transmutes it to a value of an …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConsumes <code>self</code>, returning the inner <code>T</code>.\nConverts this <code>Ref</code> into a mutable reference.\nConverts this <code>Ref</code> into a reference.\nInterprets the given <code>bytes</code> as a <code>&amp;mut Self</code> without copying.\nInterprets the prefix of the given <code>bytes</code> as a <code>&amp;mut Self</code> …\nInterprets the suffix of the given <code>bytes</code> as a <code>&amp;mut Self</code> …\nInterprets the given <code>bytes</code> as a <code>&amp;mut [Self]</code> without …\nInterprets the prefix of the given <code>bytes</code> as a <code>&amp;mut [Self]</code> …\nInterprets the suffix of the given <code>bytes</code> as a <code>&amp;mut [Self]</code> …\nConstructs a new <code>Ref</code>.\nConstructs a new <code>Unalign</code>.\nConstructs a new <code>Ref</code> from the prefix of a byte slice.\nConstructs a new <code>Ref</code> from the prefix of a byte slice, …\nConstructs a new <code>Ref</code> from the suffix of a byte slice.\nConstructs a new <code>Ref</code> from the suffix of a byte slice, …\nConstructs a new <code>Ref</code> of a slice type from the prefix of a …\nConstructs a new <code>Ref</code> of a slice type from the prefix of a …\nConstructs a new <code>Ref</code> of a slice type from the suffix of a …\nConstructs a new <code>Ref</code> of a slice type from the prefix of a …\nConstructs a new <code>Ref</code> of a slice type with no alignment …\nConstructs a new <code>Ref</code> of a slice type with no alignment …\nConstructs a new <code>Ref</code> of a slice type with no alignment …\nConstructs a new <code>Ref</code> of a slice type with no alignment …\nConstructs a new <code>Ref</code> of a slice type with no alignment …\nConstructs a new <code>Ref</code> for a slice type with no alignment …\nConstructs a new <code>Ref</code> of a slice type after zeroing the …\nConstructs a new <code>Ref</code> for a type with no alignment …\nConstructs a new <code>Ref</code> from the prefix of a byte slice for a …\nConstructs a new <code>Ref</code> from the prefix of a byte slice for a …\nConstructs a new <code>Ref</code> from the suffix of a byte slice for a …\nConstructs a new <code>Ref</code> from the suffix of a byte slice for a …\nConstructs a new <code>Ref</code> for a type with no alignment …\nCreates an instance of <code>Self</code> from zeroed bytes.\nConstructs a new <code>Ref</code> after zeroing the bytes.\nReads a copy of <code>T</code>.\nReads a copy of <code>Self</code> from <code>bytes</code>.\nReads a copy of <code>Self</code> from the prefix of <code>bytes</code>.\nReads a copy of <code>Self</code> from the suffix of <code>bytes</code>.\nInterprets the given <code>bytes</code> as a <code>&amp;Self</code> without copying.\nInterprets the prefix of the given <code>bytes</code> as a <code>&amp;Self</code> …\nInterprets the suffix of the given <code>bytes</code> as a <code>&amp;Self</code> …\nSets the inner <code>T</code>, dropping the previous value.\nInterprets the prefix of the given <code>bytes</code> as a <code>&amp;[Self]</code> with …\nInterprets the suffix of the given <code>bytes</code> as a <code>&amp;[Self]</code> with …\nSplits the slice at the midpoint.\nSafely transmutes a value of one type to a value of …\nSafely transmutes a mutable reference of one type to an …\nSafely transmutes a mutable or immutable reference of one …\nAttempts to return a reference to the wrapped <code>T</code>, failing …\nAttempts to return a mutable reference to the wrapped <code>T</code>, …\nAttempts to interpret a mutable byte slice as a <code>Self</code>.\nAttempts to interpret a byte slice as a <code>Self</code>.\nAttempts to read a <code>Self</code> from a byte slice.\nUpdates the inner <code>T</code> by calling a function on it.\nWrites the bytes of <code>t</code> and then forgets <code>t</code>.\nWrites a copy of <code>self</code> to <code>bytes</code>.\nWrites a copy of <code>self</code> to the prefix of <code>bytes</code>.\nWrites a copy of <code>self</code> to the suffix of <code>bytes</code>.\nOverwrites <code>self</code> with zeros.\nA type alias for <code>BigEndian</code>.\nBig-endian byte order.\nA type-level representation of byte order.\nA 32-bit floating point number stored in a given byte …\nA 64-bit floating point number stored in a given byte …\nA 128-bit signed integer stored in a given byte order.\nA 16-bit signed integer stored in a given byte order.\nA 32-bit signed integer stored in a given byte order.\nA 64-bit signed integer stored in a given byte order.\nA word-sized signed integer stored in a given byte order.\nA type alias for <code>LittleEndian</code>.\nLittle-endian byte order.\nThe maximum value.\nThe maximum value.\nThe maximum value.\nThe maximum value.\nThe maximum value.\nThe endianness used by this platform.\nThe endianness used in many network protocols.\nA 128-bit unsigned integer stored in a given byte order.\nA 16-bit unsigned integer stored in a given byte order.\nA 32-bit unsigned integer stored in a given byte order.\nA 64-bit unsigned integer stored in a given byte order.\nA word-sized unsigned integer stored in a given byte order.\nThe value zero.\nThe value zero.\nThe value zero.\nThe value zero.\nThe value zero.\nThe value zero.\nThe value zero.\nThe value zero.\nThe value zero.\nThe value zero.\nThe value zero.\nThe value zero.\nNumeric primitives stored in big-endian byte order.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConstructs a new value from bytes which are already in <code>O</code> …\nConstructs a new value from bytes which are already in <code>O</code> …\nConstructs a new value from bytes which are already in <code>O</code> …\nConstructs a new value from bytes which are already in <code>O</code> …\nConstructs a new value from bytes which are already in <code>O</code> …\nConstructs a new value from bytes which are already in <code>O</code> …\nConstructs a new value from bytes which are already in <code>O</code> …\nConstructs a new value from bytes which are already in <code>O</code> …\nConstructs a new value from bytes which are already in <code>O</code> …\nConstructs a new value from bytes which are already in <code>O</code> …\nConstructs a new value from bytes which are already in <code>O</code> …\nConstructs a new value from bytes which are already in <code>O</code> …\nReturns the value as a primitive type, possibly performing …\nReturns the value as a primitive type, possibly performing …\nReturns the value as a primitive type, possibly performing …\nReturns the value as a primitive type, possibly performing …\nReturns the value as a primitive type, possibly performing …\nReturns the value as a primitive type, possibly performing …\nReturns the value as a primitive type, possibly performing …\nReturns the value as a primitive type, possibly performing …\nReturns the value as a primitive type, possibly performing …\nReturns the value as a primitive type, possibly performing …\nReturns the value as a primitive type, possibly performing …\nReturns the value as a primitive type, possibly performing …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nNumeric primitives stored in little-endian byte order.\nNumeric primitives stored in native-endian byte order.\nNumeric primitives stored in network-endian byte order.\nConstructs a new value, possibly performing an endianness …\nConstructs a new value, possibly performing an endianness …\nConstructs a new value, possibly performing an endianness …\nConstructs a new value, possibly performing an endianness …\nConstructs a new value, possibly performing an endianness …\nConstructs a new value, possibly performing an endianness …\nConstructs a new value, possibly performing an endianness …\nConstructs a new value, possibly performing an endianness …\nConstructs a new value, possibly performing an endianness …\nConstructs a new value, possibly performing an endianness …\nConstructs a new value, possibly performing an endianness …\nConstructs a new value, possibly performing an endianness …\nUpdates the value in place as a primitive type, possibly …\nUpdates the value in place as a primitive type, possibly …\nUpdates the value in place as a primitive type, possibly …\nUpdates the value in place as a primitive type, possibly …\nUpdates the value in place as a primitive type, possibly …\nUpdates the value in place as a primitive type, possibly …\nUpdates the value in place as a primitive type, possibly …\nUpdates the value in place as a primitive type, possibly …\nUpdates the value in place as a primitive type, possibly …\nUpdates the value in place as a primitive type, possibly …\nUpdates the value in place as a primitive type, possibly …\nUpdates the value in place as a primitive type, possibly …\nExtracts the bytes of <code>self</code> without swapping the byte order.\nExtracts the bytes of <code>self</code> without swapping the byte order.\nExtracts the bytes of <code>self</code> without swapping the byte order.\nExtracts the bytes of <code>self</code> without swapping the byte order.\nExtracts the bytes of <code>self</code> without swapping the byte order.\nExtracts the bytes of <code>self</code> without swapping the byte order.\nExtracts the bytes of <code>self</code> without swapping the byte order.\nExtracts the bytes of <code>self</code> without swapping the byte order.\nExtracts the bytes of <code>self</code> without swapping the byte order.\nExtracts the bytes of <code>self</code> without swapping the byte order.\nExtracts the bytes of <code>self</code> without swapping the byte order.\nExtracts the bytes of <code>self</code> without swapping the byte order.\nA 32-bit floating point number stored in big-endian byte …\nA 64-bit floating point number stored in big-endian byte …\nA 128-bit signed integer stored in big-endian byte order.\nA 16-bit signed integer stored in big-endian byte order.\nA 32-bit signed integer stored in big-endian byte order.\nA 64-bit signed integer stored in big-endian byte order.\nA 128-bit unsigned integer stored in big-endian byte order.\nA 16-bit unsigned integer stored in big-endian byte order.\nA 32-bit unsigned integer stored in big-endian byte order.\nA 64-bit unsigned integer stored in big-endian byte order.\nA 32-bit floating point number stored in little-endian …\nA 64-bit floating point number stored in little-endian …\nA 128-bit signed integer stored in little-endian byte …\nA 16-bit signed integer stored in little-endian byte order.\nA 32-bit signed integer stored in little-endian byte order.\nA 64-bit signed integer stored in little-endian byte order.\nA 128-bit unsigned integer stored in little-endian byte …\nA 16-bit unsigned integer stored in little-endian byte …\nA 32-bit unsigned integer stored in little-endian byte …\nA 64-bit unsigned integer stored in little-endian byte …\nA 32-bit floating point number stored in native-endian …\nA 64-bit floating point number stored in native-endian …\nA 128-bit signed integer stored in native-endian byte …\nA 16-bit signed integer stored in native-endian byte order.\nA 32-bit signed integer stored in native-endian byte order.\nA 64-bit signed integer stored in native-endian byte order.\nA 128-bit unsigned integer stored in native-endian byte …\nA 16-bit unsigned integer stored in native-endian byte …\nA 32-bit unsigned integer stored in native-endian byte …\nA 64-bit unsigned integer stored in native-endian byte …\nA 32-bit floating point number stored in network-endian …\nA 64-bit floating point number stored in network-endian …\nA 128-bit signed integer stored in network-endian byte …\nA 16-bit signed integer stored in network-endian byte …\nA 32-bit signed integer stored in network-endian byte …\nA 64-bit signed integer stored in network-endian byte …\nA 128-bit unsigned integer stored in network-endian byte …\nA 16-bit unsigned integer stored in network-endian byte …\nA 32-bit unsigned integer stored in network-endian byte …\nA 64-bit unsigned integer stored in network-endian byte …")