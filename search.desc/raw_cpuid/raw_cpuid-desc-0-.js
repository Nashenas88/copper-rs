searchState.loadedDescShard("raw_cpuid", 0, "A library to parse the x86 CPUID instruction, written in …\nProcessor Power Management and RAS Capabilities …\nInfo about cache Associativity.\nThis table is taken from Intel manual (Section CPUID …\nDescribes any kind of cache (TLB, Data and Instruction …\nIterates over cache information (LEAF=0x02).\nWhat type of cache are we dealing with?\nInformation about an individual cache in the hierarchy.\nIterator over caches (LEAF=0x04).\nInfo about a what a given cache caches (instructions, …\nThe main type used to query information about the CPU we’…\nImplements function to read/write cpuid. This allows to …\nLow-level data-structure to store result of cpuid …\nDeterministic Address Translation Structure\nDeterministic Address Translation Structure Iterator …\nDeterministic Address Translation cache type (EDX bits 04 …\nData cache\nDirect cache access info (LEAF=0x09).\nEBX:EAX and EDX:ECX provide information on the Enclave …\nStructured Extended Feature Identifiers (LEAF=0x07).\nExtended Processor and Processor Feature Identifiers …\nWhere the extended register state is stored.\nWhat kidn of extended register state this is.\nExtendedState subleaf structure for things that need to be …\nInformation for saving/restoring extended register state …\nYields ExtendedState structs.\nInformation about topology (LEAF=0x0B).\nGives information about the current level in the topology.\nProcessor and Processor Feature Identifiers (LEAF=0x01).\nIdentifies the different Hypervisor products.\nInformation about Hypervisor (LEAF=0x4000_0001)\nInstruction cache\nL1 Cache and TLB Information (LEAF=0x8000_0005).\nL2/L3 Cache and TLB Information (LEAF=0x8000_0006).\nL2 Cache Allocation Technology Enumeration Sub-leaf …\nL3 Cache Allocation Technology Enumeration Sub-leaf …\nInformation about L3 cache monitoring.\nMemory Bandwidth Allocation Enumeration Sub-leaf …\nEncrypted Memory Capabilities (LEAF=0x8000_001F).\nInformation about how monitor/mwait works on this CPU …\nNull - No more caches\nNull (indicates this sub-leaf is not valid).\nInfo about performance monitoring – how many counters …\nPerformance Optimization Identifier (LEAF=0x8000_001A).\nProcessor name (LEAF=0x8000_0002..=0x8000_0004).\nProcessor Capacity Parameters and Extended Feature …\nProcessor Frequency Information (LEAF=0x16).\nProcessor Serial Number (LEAF=0x3).\nProcessor Topology Information (LEAF=0x8000_001E).\nIntel Processor Trace Information (LEAF=0x14).\nQEMU is the hypervisor identity when QEMU is used without …\nQuality of service enforcement information (LEAF=0x10).\nIntel Resource Director Technology RDT (LEAF=0x0F).\n4-31 = Reserved\nHyper-thread (Simultaneous multithreading)\nIntel SGX Capability Enumeration Leaf (LEAF=0x12).\nIntel SGX EPC Enumeration Leaf\nIterator over the SGX sub-leafs (ECX &gt;= 2).\nIterator for SoC vendor attributes.\nA vendor brand string as queried from the cpuid leaf.\nSoC vendor specific information (LEAF=0x17).\nInformation about the SVM features that the processory …\nQuery information about thermal and power management …\nTLB 1-GiB Pages Information (LEAF=0x8000_0019).\nWhat type of core we have at this level in the topology …\nTime Stamp Counter/Core Crystal Clock Information …\nData and Instruction cache\nSome unified TLBs will allow a single TLB entry to satisfy …\nVendor Info String (LEAF=0x0)\n(Virtual) Bus (local apic timer) frequency in kHz.\nAPIC ID size.\nReturn the processor brand string as a rust string.\nReturn vendor identification as human readable string.\nReturn the SocVendorBrand as a string.\nWays of associativity (Bits 31-22)\nVersion Information: Family\nVersion Information: Model\nReturns brand ID on AMD.\nBrand Index\nBus (Reference) Frequency (in MHz).\nC-bit location in page table entry\nTranslation cache level (starts at 1)\nTranslation cache type field.\nCache Type\nLength of the capacity bit mask.\nLength of the capacity bit mask.\nCLFLUSH line size (Value ∗ 8 = cache line size in bytes)\nSystem Coherency Line Size (Bits 11-00)\nNumber of configurable Address Ranges for filtering (Bits …\nConversion factor from reported IA32_QM_CTR value to …\nCore ID\nBit width of general-purpose, performance monitoring …\nSpecifies the ratio of the compute unit power accumulator …\nMacro which queries cpuid directly.\nL1 data cache associativity.\nL1 data cache line size in bytes.\nL1 data cache lines per tag.\nL1 data cache size in KB\nCreate a new <code>CpuId</code> instance.\nAn unsigned integer which is the denominator of the …\nDescription of the cache (from Intel Manual)\nData TLB associativity for 2-MB and 4-MB pages.\nL2 Data TLB associativity for 2-MB and 4-MB pages.\nData TLB number of entries for 2-MB and 4-MB pages.\nL2 Data TLB number of entries for 2-MB and 4-MB pages.\nData TLB associativity for 4K pages.\nL2 Data TLB associativity for 4K pages.\nData TLB number of entries for 4K pages.\nL2 Data TLB number of entries for 4K pages.\nL1 Data TLB associativity for 1-GB pages.\nL1 Data TLB number of entries for 1-GB pages.\nL2 Data TLB associativity for 1-GB pages.\nL2 Data TLB number of entries for 1-GB pages.\nNumber of Interrupt Thresholds in Digital Thermal Sensor\nReturn value EAX register\nReturn value EBX register\nLength of EBX bit vector to enumerate architectural …\nReturn value ECX register\nReturn value EDX register\nVersion Information: Extended Family\nVersion Information: Extended Model\nExtended Processor Signature.\nEnumeration of Monitor-Mwait extensions (beyond EAX and …\nNumber of fixed-function performance counters (if Version …\nBit width of fixed-function performance counters (if …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nAdvanced Power Management Information (LEAF=0x8000_0007).\nQuery basic information about caches (LEAF=0x02).\nRetrieve more elaborate information about caches …\nValue of bits [31:0] of IA32_PLATFORM_DCA_CAP MSR (address …\nQuery deterministic address translation feature …\nDirect cache access info (LEAF=0x09).\nFind out about more features supported by this CPU …\nExtended Processor and Processor Feature Identifiers …\nInformation for saving/restoring extended register state …\nInformation about topology (LEAF=0x0B).\nExtended information about topology (LEAF=0x1F).\nQuery a set of features that are available on this CPU …\nReturns information provided by the hypervisor, if running …\nL1 Instruction Cache Information (LEAF=0x8000_0005)\nL2/L3 Cache and TLB Information (LEAF=0x8000_0006).\nInformations about memory encryption support …\nInformation about how monitor/mwait works on this CPU …\nInfo about performance monitoring (LEAF=0x0A).\nInformations about performance optimization …\nRetrieve processor brand string (LEAF=0x8000_000{2..4}).\nProcessor Capacity Parameters and Extended Feature …\nProcessor Frequency Information (LEAF=0x16).\nRetrieve serial number of processor (LEAF=0x03).\nInformations about processor topology (LEAF=0x8000_001E)\nIntel Processor Trace Enumeration Information (LEAF=0x14).\nQuality of service enforcement information (LEAF=0x10).\nQuality of service monitoring information (LEAF=0x0F).\nInformation about secure enclave support (LEAF=0x12).\nContains SoC vendor specific information (LEAF=0x17).\nThis function provides information about the SVM features …\nQuery information about thermal and power management …\nTLB 1-GiB Pages Information (LEAF=0x8000_0019)\nTime Stamp Counter/Core Crystal Clock Information …\nReturn information about the vendor (LEAF=0x00).\nGuest Physical Address Bits\nHas 100 MHz multiplier Control?\n1GB page size entries supported by this structure\nIs there support for 1GiB pages.\n2MB page size entries supported by this structure\n3DNow extensions.\n4K page size entries supported by this structure\n4MB page size entries supported by this structure\nCheck support for 64-bit mode.\nSEV guest execution only allowed from a 64-bit host if set.\nThermal Monitor and Software Controlled Clock Facilities. …\nBreakpoint Addressing masking extended to bit 31.\nSupports ADX.\nA value of 1 indicates that the processor supports the …\nLOCK MOV CR0 means MOV CR8. See “MOV(CRn)” in APM3.\nAlternate Injection supported if set.\n3DNow AMD extensions.\nSupports AMX_BF16.\nSupports AMX_INT8.\nSupports AMX_TILE.\nAnyThread deprecation\nAPIC On-Chip. The processor contains an Advanced …\nARAT. APIC-Timer-always-running feature is supported if …\nAVX512VBMI2\nSupport for the AMD advanced virtual interrupt controller …\nA value of 1 indicates the processor supports the AVX …\nAVX2\nSupports AVX512_4FMAPS.\nSupports AVX512_4VNNIW.\nSupports AVX512_FP16.\nAVX512_IFMA\nSupports AVX512_VP2INTERSECT.\nAVX512BITALG\nAVX512BW\nAVX512CD\nSupports AVX512DQ.\nAVX512ER\nSupports AVX512F.\nAVX512PF\nAVX512VL\nAVX512VNNI\nAVX512VPOPCNTDQ\nBMI1\nBMI2\nSupports CET shadow stack features. Processors that set …\nCLZERO instruction supported if set.\nCLFLUSH Instruction. CLFLUSH Instruction is supported.\nSupports CLFLUSHOPT.\nCLWB\nConditional Move Instructions. The conditional move …\nCheck support legacy cmp.\nCMPXCHG16B Available. A value of 1 indicates that the …\nCMPXCHG8B Instruction. The compare-and-exchange 8 bytes …\nL1 Context ID. A value of 1 indicates the L1 data cache …\nIs Code and Data Prioritization Technology supported?\nComplex Cache Indexing (Bit 2) False: Direct mapped cache. …\nIf true, Indicates support of Configurable PSB and …\nHas Core performance boost?\nCPL Qualified Debug Store. A value of 1 indicates the …\nData access breakpoint extension.\nA value of 1 indicates the processor supports the ability …\nDebugging Extensions. Support for I/O breakpoints, …\nFull debug state swap supported for SEV-ES guests.\nIndicates support for the decode assists if set.\nDebug Store. The processor supports the ability to write …\n64-bit DS Area. A value of 1 indicates the processor …\nDigital temperature sensor is supported if set.\nECMD. Clock modulation duty cycle extension is supported …\nEnhanced Intel SpeedStep® technology. A value of 1 …\nSupports ENCLS instruction leaves ETRACKC, ERDINFO, ELDBC, …\nSupports ENCLV instruction leaves EINCVIRTCHILD, …\nThe processor supports performance-energy bias preference …\nIs there support for execute disable bit.\nExtended APIC space.\nA value of 1 indicates that processor supports 16-bit …\nFXSAVE and FXRSTOR instruction optimizations.\nFDP_EXCPTN_ONLY. x87 FPU Data Pointer updated only on x87 …\nIndicates support for processor feedback interface.\nFlexible HWP is supported if set.\nIndicates that TLB flush events, including CR3 writes and …\nA value of 1 indicates the processor supports FMA …\nFour-operand FMA instruction support.\nThe internal FP/SIMD execution datapath is 128 bits wide …\nThe internal FP/SIMD execution datapath is 256 bits wide …\nFloating Point Unit On-Chip. The processor contains an x87 …\nDeprecates FPU CS and FPU DS values if 1.\nFrequency ID control.\nFSGSBASE. Supports RDFSBASE/RDGSBASE/WRFSBASE/WRGSBASE if …\nFXSAVE and FXRSTOR Instructions. The FXSAVE and FXRSTOR …\nGFNI\nGIF – virtualized global interrupt flag if set.\nGuest Mode Execution Trap supported if set.\nHDC. HDC base registers IA32_PKG_HDC_CTL, IA32_PM_CTL1, …\nHLE\nWhen host <code>CR4.MCE=1</code> and guest <code>CR4.MCE=0</code>, machine check …\nMax APIC IDs reserved field is Valid. A value of 0 for HTT …\nHardware Coordination Feedback Capability\nHardware cache coherency across encryption domains …\nHas Hardware P-state control?\nHas Hardware assert supported?\nHWP. HWP base registers (IA32_PM_ENABLE[bit 0], …\nHWP Activity Window. IA32_HWP_REQUEST[bits 41:32] is …\nHWP Capabilities. Highest Performance change is supported …\nHWP Energy Performance Preference. IA32_HWP_REQUEST[bits …\nFast access mode for the IA32_HWP_REQUEST MSR is supported …\nHWP Notification. IA32_HWP_INTERRUPT MSR is supported if …\nHWP Package Level Request. IA32_HWP_REQUEST_PKG MSR is …\nHWP PECI override is supported if set.\nA value of 1 indicates the indicates the presence of a …\nInstruction based sampling.\nIgnoring Idle Logical Processor HWP request is supported …\nInstruction Retired Counter MSR available if set.\nWBINVD/WBNOINVD are interruptible if set.\nIs Invariant TSC available?\nINVLPGB and TLBSYNC instruction supported if set.\nINVLPGB support for invalidating guest nested translations …\nINVPCID. If 1, supports INVPCID instruction for system …\nIf true, Indicates support of IP Filtering, TraceStop …\nSupports L2 Cache Allocation.\nSupports L3 Cache Allocation.\nSupports L3 Cache Intel RDT Monitoring.\nSupports 57-bit linear addresses and five-level paging if …\nIs LAHF/SAHF available in 64-bit mode?\nIndicates support for LBR Virtualization.\nReports whether the response of the delay values is linear.\nIf true, Generated packets which contain IP payloads have …\nSupports local bandwidth monitoring.\nLightweight profiling support\nIs LZCNT available?\nMachine Check Architecture. A value of 1 indicates the …\nIs MCA overflow recovery available?\nMachine Check Exception. Exception 18 is defined for …\nMCOMMIT instruction supported if set.\nSupports Memory Bandwidth Allocation.\nMisaligned SSE mode. See “Misaligned Access Support …\nIntel MMX Technology. The processor supports the Intel MMX …\nAMD extensions to MMX instructions.\nMONITOR/MWAIT. A value of 1 indicates the processor …\nSupport for MWAITX and MONITORX instructions.\nA value of 1 indicates that the processor supports MOVBE …\nMOVU (Move Unaligned) SSE instructions are efficient more …\nMPX. Supports Intel Memory Protection Extensions if 1.\nModel Specific Registers RDMSR and WRMSR Instructions. The …\nIf true, Indicates support of MTC timing packet and …\nMemory Type Range Registers. MTRRs are supported. The …\nNB performance counter extensions support.\nNested paging supported if set.\nIndicates support for NRIP save on #VMEXIT if set.\nSupports occupancy monitoring.\nOS has set CR4.PKE to enable protection keys (and the …\nIndicates OS-visible workaround support\nA value of 1 indicates that the OS has enabled …\nPhysical Address Extension. Physical addresses greater …\nThe Page Flush MSR is available if set.\nPage Attribute Table. Page Attribute Table is supported. …\nIndicates support for the pause intercept filter if set.\nIndicates support for the PAUSE filter cycle count …\nPending Break Enable. The processor supports the use of …\nProcess-context identifiers. A value of 1 indicates that …\nPCLMULQDQ. A value of 1 indicates the processor supports …\nPerfmon and Debug Capability: A value of 1 indicates the …\nProcessor performance counter extensions support.\nSupport for L3 performance counter extension.\nPerformance time-stamp counter.\nPage Global Bit. The global bit is supported in …\nSupports protection keys for user-mode pages.\nPLN. Power limit notification controls are supported if …\nA value of 1 indicates that the processor supports the …\nSupport of Power Event Trace. Writes can set IA32_RTIT_CTL…\nHas Processor power reporting interface?\nIs PREFETCHW available?\nHas PREFETCHWT1 (Intel® Xeon Phi™ only).\nDisallowing IBS use by the host supported if set.\nSupports Intel Processor Trace.\nPage Size Extension. Large pages of size 4 MByte are …\n36-Bit Page Size Extension. 4-MByte pages addressing …\nProcessor Serial Number. The processor supports the 96-bit …\nPTM. Package thermal management is supported if set.\nIndicates support of PTWRITE. Writes can set IA32_RTIT_CTL…\nRDPID and IA32_TSC_AUX are available.\nRDPRU instruction supported if set.\nA value of 1 indicates that processor supports RDRAND …\nSupports RDSEED.\nSupports Intel Resource Director Technology (RDT) …\nSupports Intel Resource Director Technology (RDT) …\nCheck support for rdtscp instruction.\nSupports Enhanced REP MOVSB/STOSB if 1.\nFP Error Pointers Restored by XRSTOR if set.\nRestricted Injection supported if set.\nHas Read-only effective frequency interface?\nIf true, Indicates that IA32_RTIT_CTL.CR3Filter can be set …\nRTM\nSecure Encrypted Virtualization is supported if set.\nSEV Encrypted State is supported if set.\nSEV Secure Nested Paging supported if set.\nSupports Intel® Software Guard Extensions (Intel® SGX …\nHas SGX1 support.\nHas SGX2 support.\nSupports SGX Launch Configuration.\nSupports SHA Instructions.\nIf true, Indicates support of Single-Range Output scheme.\nSKINIT and STGI are supported.\nSMAP. Supports Supervisor-Mode Access Prevention (and the …\nSecure Memory Encryption is supported if set.\nSMEP. Supports Supervisor-Mode Execution Prevention if 1.\nSafer Mode Extensions. A value of 1 indicates that the …\nSPEC_CTRL virtualization supported if set.\nSelf Snoop. The processor supports the management of …\nSSE. The processor supports the SSE extensions.\nSSE2. The processor supports the SSE2 extensions.\nStreaming SIMD Extensions 3 (SSE3). A value of 1 indicates …\nA value of 1 indicates that the processor supports SSE4.1.\nA value of 1 indicates that the processor supports SSE4.2.\nXTRQ, INSERTQ, MOVNTSS, and MOVNTSD instruction support.\nSVM supervisor shadow stack restrictions if set.\nA value of 1 indicates the presence of the Supplemental …\nHas Software uncorrectable error containment and recovery …\nSecure virtual machine supported.\nIndicates support for SVM-Lock if set.\nAre fast system calls available.\nSYSENTER and SYSEXIT Instructions. The SYSENTER and …\nTrailing bit manipulation instruction support.\nHas THERMTRIP?\nSupport for INVLPGB/TLBSYNC hypervisor enable in VMCB and …\nThermal Monitor. The processor implements the thermal …\nHardware thermal control (HTC)?\nThermal Monitor 2. A value of 1 indicates whether the …\nIndicates the following MSRs are supported: …\nIf true, Tracing can be enabled with IA32_RTIT_CTL.ToPA = …\nIf true, ToPA tables can hold any number of output …\nTopology extensions support.\nSupports total bandwidth monitoring.\nIf true, Indicates support of output to Trace Transport …\nIs Temperature Sensor available?\nTime Stamp Counter. The RDTSC instruction is supported, …\nIA32_TSC_ADJUST MSR is supported if 1.\nA value of 1 indicates that the processors local APIC …\nIndicates support for MSR TSC ratio (MSR <code>0xC000_0104</code>) if …\nIntel Turbo Boost Technology Available (see description of …\nIntel® Turbo Boost Max Technology 3.0 available.\nSupports user-mode instruction prevention if 1.\nEFER.LMSLE is unsupported if set.\nVAES\nIndicates support for VMCB clean bits if set.\nVirtual 8086 Mode Enhancements. Virtual 8086 mode …\nVM Permission Levels supported if set.\nVMSAVE and VMLOAD virtualization supported if set.\nVirtual Machine Extensions. A value of 1 indicates that …\nVoltage ID control.\nVPCLMULQDQ\nVirtual Transparent Encryption supported if set.\nWAITPKG\nWBNOINVD instruction supported if set.\nWatchdog timer support.\nA value of 1 indicates that the processor supports x2APIC …\nSupports XGETBV with ECX = 1 if set.\nExtended operation support.\nA value of 1 indicates that the processor supports the …\nSupports XSAVEC and the compacted form of XRSTOR if set.\nCPU has xsaveopt feature.\nSupports XSAVES/XRSTORS and IA32_XSS if set.\nHighest COS number supported for this Leaf.\nHighest COS number supported for this Leaf.\nHighest COS number supported for this Leaf.\nSupport for HDC in IA32_XSS.\nSupport for PT in IA32_XSS.\nL1 instruction cache associativity.\nL1 instruction cache line size in bytes.\nL1 instruction cache lines per tag.\nL1 instruction cache size in KB\nReturns the identity of the <code>Hypervisor</code>.\nInitial APIC ID\nSupports treating interrupts as break-event for MWAIT, …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nMaximum page count for INVLPGB instruction.\nBranch instruction retired event not available if 1.\nBranch mispredict retired event not available if 1.\nLast-level cache reference event not available if 1.\nReturns true when the compacted format of an XSAVE area is …\nCore cycle event not available if 1.\nFully associative structure\nFully Associative cache\nTrue if the bit n (corresponding to the sub-leaf index) is …\nTrue if bit n is supported in XCR0.\nCache Inclusiveness (Bit 1) False: Cache is not inclusive …\nInstruction retired event not available if 1.\nLast-level cache misses event not available if 1.\nReference cycles event not available if 1.\nSelf Initializing cache level (does not need SW …\nWrite-Back Invalidate/Invalidate (Bit 0) False: …\nBit-granular map of isolation/contention of allocation …\nBit-granular map of isolation/contention of allocation …\nIterator over extended state enumeration levels &gt;= 2.\nIterator over SGX sub-leafs.\nInstruction TLB associativity for 2-MB and 4-MB pages.\nL2 Instruction TLB associativity for 2-MB and 4-MB pages.\nInstruction TLB number of entries for 2-MB and 4-MB pages.\nL2 Instruction TLB number of entries for 2-MB and 4-MB …\nInstruction TLB associativity for 4K pages.\nL2 Instruction TLB associativity for 4K pages.\nInstruction TLB number of entries for 4K pages.\nL2 Instruction TLB number of entries for 4K pages.\nL1 Instruction TLB associativity for 1-GB pages.\nL1 Instruction TLB number of entries for 1-GB pages.\nL2 Instruction TLB associativity for 1-GB pages.\nL2 Instruction TLB number of entries for 1-GB pages.\nL2 Cache Allocation Information.\nL2 Associativity field\nL2 Cache Line size in bytes\nL2 cache lines per tag.\nCache size in KB.\nL3 Cache Allocation Information.\nL3 Cache Monitoring.\nL2 Associativity field\nL2 Cache Line size in bytes\nL2 cache lines per tag.\nSpecifies the L3 cache size range\nLargest monitor-line size in bytes (default is processor’…\nCache Level (starts at 1)\nLevel number.\nLinear Address Bits\nThe value of MAWAU used by the BNDLDX and BNDSTX …\nMaximum number of addressable IDs for logical processors …\nMaximum number of addressable IDs for logical processors …\nMaximum number of addressable IDs for processor cores in …\nThe maximum supported enclave size in 64-bit mode is …\nThe maximum supported enclave size in non-64-bit mode is …\nNumber of encrypted guests supported simultaneouslys\nReports the maximum MBA throttling value supported for the …\nMaximum number of addressable IDs for logical processors …\nThe maximum ECX value recognized by RDPRU.\nThe size of the <code>apic_id_size</code> field determines the maximum …\nMaximum range (zero-based) of RMID of L3.\nMemory Bandwidth Allocation Information.\nMinimum ASID value for an SEV enabled, SEV-ES disabled …\nBit vector of supported extended SGX features.\nUses Rust’s <code>cpuid</code> function from the <code>arch</code> module.\nCreate a new <code>CpuId</code> instance.\nIterate over all SoC vendor specific attributes.\nIterate over all cache information.\nIterate over all cache info subleafs for this CPU.\nIterate over each sub-leaf with an address translation …\nNode ID\nNodes per processor\nAn unsigned integer which is the nominal frequency of the …\nNumber as retrieved from cpuid\nNumber of physical threads in the processor.\nNumber of general-purpose performance monitoring counter …\nAn unsigned integer which is the numerator of the …\nThe offset in bytes of this extended state components save …\nPartitioning (0: Soft partitioning between the logical …\nPerformance time-stamp counter size (in bits).\nPhysical Address Bits\nPhysical Address bit reduction\nThe physical address of the base of the EPC section\nPhysical Line partitions (Bits 21-12)\nReturns package type on AMD.\nProcessor Base Frequency (in MHz).\nMaximum Frequency (in MHz).\nNumber of logical processors at this level type. The …\nReturns which register this specific extended subleaf …\nSVM revision number.\nMaximum range (zero-based) of RMID within this physical …\nReports the valid bits of SECS.ATTRIBUTES[127:0] that …\nCombination of bits 00-31 and 32-63 of 96 bit processor …\n96 bit processor serial number.\nBits 00-31 of 96 bit processor serial number.\nBits 32-63 of 96 bit processor serial number.\nBits 64-96 of 96 bit processor serial number.\nNumber of Sets.\nNumber of Sets (Bits 31-00)\nNumber of bits to shift right on x2APIC ID to get a unique …\nThe size in bytes (from the offset specified in EBX) of …\nSize of the corresponding EPC section within the Processor …\nSmallest monitor-line size in bytes (default is processor…\nVersion Information: Stepping ID\nNumber of available address space identifiers (ASID).\nNumber of C0 sub C-states supported using MWAIT (Bits 03 - …\nNumber of C1 sub C-states supported using MWAIT (Bits 07 - …\nNumber of C2 sub C-states supported using MWAIT (Bits 11 - …\nNumber of C3 sub C-states supported using MWAIT (Bits 15 - …\nNumber of C4 sub C-states supported using MWAIT (Bits 19 - …\nNumber of C5 sub C-states supported using MWAIT (Bits 23 - …\nNumber of C6 sub C-states supported using MWAIT (Bits 27 - …\nNumber of C7 sub C-states supported using MWAIT (Bits 31 - …\nBitmap of supported Cycle Threshold value encodings (Bits …\nBitmap of supported MTC period encodings (Bit 31:16).\nBitmap of supported Configurable PSB frequency encodings …\nThreads per core\n“TSC frequency” = “core crystal clock frequency” * …\nTSC frequency in kHz.\nCache type\nVersion ID of architectural performance monitoring. (Bits …\nWays of associativity.\nSee <code>CpuId::with_cpuid_reader</code>.\nReturn new CpuId struct with custom reader function.\nx2APIC ID\nx2APIC ID the current logical processor. (Bits 31-00)\nSupport for AVX512 OPMASK in XCR0.\nSupport for AVX512 ZMM Hi16 in XCR0.\nSupport for AVX512 ZMM Hi256 XCR0.\nSupport for AVX 256-bit in XCR0.\nSupport for legacy x87 in XCR0.\nSupport for MPX BNDCSR in XCR0.\nSupport for MPX BNDREGS in XCR0.\nSupport for PKRU in XCR0.\nSupport for SSE 128-bit in XCR0.\nMaximum size (bytes, from the beginning of the …\nMaximum size (bytes, from the beginning of the …\nThe size in bytes of the XSAVE area containing all states …\nThe native reader uses the cpuid instruction to read the …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.")