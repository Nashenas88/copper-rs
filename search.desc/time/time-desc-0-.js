searchState.loadedDescShard("time", 0, "Feature flags\nEquivalent to <code>1.days()</code>.\nDate in the proleptic Gregorian calendar.\nA span of time with nanosecond precision.\nContains the error value\nEquivalent to <code>1.hours()</code>.\nA measurement of a monotonically non-decreasing clock. …\nThe maximum valid <code>Date</code>.\nThe maximum possible duration. Adding any positive …\nThe largest value that can be represented by …\nEquivalent to <code>1.microseconds()</code>.\nCreate a <code>Time</code> that is exactly midnight.\nEquivalent to <code>1.milliseconds()</code>.\nThe minimum valid <code>Date</code>.\nThe minimum possible duration. Adding any negative …\nThe smallest value that can be represented by …\nEquivalent to <code>1.minutes()</code>.\nMonths of the year.\nEquivalent to <code>1.nanoseconds()</code>.\nA <code>PrimitiveDateTime</code> with a <code>UtcOffset</code>.\nContains the success value\nCombined date and time.\nAn alias for <code>std::result::Result</code> with a generic error from …\nEquivalent to <code>1.seconds()</code>.\nThe clock time within a given date. Nanosecond precision.\nMidnight, 1 January, 1970 (UTC).\nA <code>UtcOffset</code> that is UTC.\nAn offset from UTC.\nEquivalent to <code>1.weeks()</code>.\nDays of the week.\nEquivalent to <code>0.seconds()</code>.\nGet the absolute value of the duration.\nPanics\nPanics\nPanics\nPanics\nPanics\nPanics\nPanics\nPanics\nPanics\nAdd the sub-day time of the <code>Duration</code> to the <code>Time</code>. Wraps on …\nAdd the sub-day time of the <code>std::time::Duration</code> to the <code>Time</code>…\nPanics\nPanics\nPanics\nPanics\nGet the clock hour, minute, and second.\nGet the clock hour, minute, and second.\nObtain the UTC offset as its hours, minutes, and seconds. …\nGet the clock hour, minute, second, and microsecond.\nGet the clock hour, minute, second, and microsecond.\nGet the clock hour, minute, second, and millisecond.\nGet the clock hour, minute, second, and millisecond.\nGet the clock hour, minute, second, and nanosecond.\nGet the clock hour, minute, second, and nanosecond.\nGet the number of fractional seconds in the duration.\nGet the number of fractional seconds in the duration.\nAssuming that the existing <code>PrimitiveDateTime</code> represents a …\nAssuming that the existing <code>PrimitiveDateTime</code> represents a …\nComputes <code>self + duration</code>, returning <code>None</code> if an overflow …\nComputes <code>self + rhs</code>, returning <code>None</code> if an overflow …\nReturns <code>Some(t)</code> where <code>t</code> is the time <code>self + duration</code> if <code>t</code> …\nComputes <code>self + duration</code>, returning <code>None</code> if an overflow …\nComputes <code>self + duration</code>, returning <code>None</code> if an overflow …\nComputes <code>self + duration</code>, returning <code>None</code> if an overflow …\nComputes <code>self / rhs</code>, returning <code>None</code> if <code>rhs == 0</code> or if the …\nComputes <code>self * rhs</code>, returning <code>None</code> if an overflow …\nComputes <code>-self</code>, returning <code>None</code> if the result would …\nCreates a new <code>Duration</code> from the specified number of seconds\nCreates a new <code>Duration</code> from the specified number of seconds\nComputes <code>self - duration</code>, returning <code>None</code> if an overflow …\nComputes <code>self - rhs</code>, returning <code>None</code> if an overflow …\nReturns <code>Some(t)</code> where <code>t</code> is the time <code>self - duration</code> if <code>t</code> …\nComputes <code>self - duration</code>, returning <code>None</code> if an overflow …\nComputes <code>self - duration</code>, returning <code>None</code> if an overflow …\nComputes <code>self - duration</code>, returning <code>None</code> if an overflow …\nConvert the <code>OffsetDateTime</code> from the current <code>UtcOffset</code> to …\nConversion between units of time.\nAttempt to obtain the system’s current UTC offset. If …\nGet the <code>Date</code> in the stored offset.\nGet the <code>Date</code> component of the <code>PrimitiveDateTime</code>.\nGet the day of the month.\nGet the day of the date in the stored offset.\nGet the day of the date.\nCreate a new <code>Duration</code> with the given number of days. …\nReturns the amount of time elapsed since this instant was …\nVarious error types returned by methods in the time crate.\nExtension traits.\nFormat the <code>Date</code> using the provided format description.\nFormat the <code>OffsetDateTime</code> using the provided format …\nFormat the <code>PrimitiveDateTime</code> using the provided format …\nFormat the <code>Time</code> using the provided format description.\nFormat the <code>UtcOffset</code> using the provided format description.\nDescription of how types should be formatted and parsed.\nFormat the <code>Date</code> using the provided format description.\nFormat the <code>OffsetDateTime</code> using the provided format …\nFormat the <code>PrimitiveDateTime</code> using the provided format …\nFormat the <code>Time</code> using the provided format description.\nFormat the <code>UtcOffset</code> using the provided format description.\nFormatting for various types.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nAttempt to create a <code>Date</code> from the year, month, and day.\nAttempt to create a <code>Time</code> from the hour, minute, and second.\nCreate a <code>UtcOffset</code> representing an offset by the number of …\nAttempt to create a <code>Time</code> from the hour, minute, second, …\nAttempt to create a <code>Time</code> from the hour, minute, second, …\nAttempt to create a <code>Time</code> from the hour, minute, second, …\nAttempt to create a <code>Date</code> from the ISO year, week, and …\nCreate a <code>Date</code> from the Julian day.\nAttempt to create a <code>Date</code> from the year and ordinal day …\nCreate an <code>OffsetDateTime</code> from the provided Unix timestamp. …\nConstruct an <code>OffsetDateTime</code> from the provided Unix …\nCreate a <code>UtcOffset</code> representing an offset by the number of …\nGet the clock hour in the stored offset.\nGet the clock hour.\nGet the clock hour.\nCreate a new <code>Duration</code> with the given number of hours. …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nObtain the inner <code>std::time::Instant</code>.\nCheck if a duration is negative.\nCheck if the offset is negative, or west of UTC.\nCheck if a duration is positive.\nCheck if the offset is positive, or east of UTC.\nCheck if the offset is exactly UTC.\nCheck if a duration is exactly zero.\nGet the ISO week number.\nGet the ISO week number of the date in the stored offset.\nGet the ISO week number.\nAttempt to obtain the system’s UTC offset at a known …\nMacros to construct statically known values.\nGet the microseconds within the second in the stored …\nGet the microseconds within the second.\nGet the microseconds within the second.\nCreate a new <code>Duration</code> with the given number of …\nCreate a <code>PrimitiveDateTime</code> using the existing date. The …\nGet the milliseconds within the second in the stored …\nGet the milliseconds within the second.\nGet the milliseconds within the second.\nCreate a new <code>Duration</code> with the given number of …\nGet the minute within the hour in the stored offset.\nGet the minute within the hour.\nGet the minute within the hour.\nCreate a new <code>Duration</code> with the given number of minutes. …\nObtain the number of minutes past the hour the offset is …\nGet the week number where week 1 begins on the first …\nGet the week number where week 1 begins on the first …\nGet the week number where week 1 begins on the first …\nGet the month.\nGet the month of the date in the stored offset.\nGet the month of the date.\nGet the nanoseconds within the second in the stored offset.\nGet the nanoseconds within the second.\nGet the nanoseconds within the second.\nCreate a new <code>Duration</code> with the given number of nanoseconds.\nCreate a new <code>Duration</code> with the provided seconds and …\nCreate a new <code>PrimitiveDateTime</code> from the provided <code>Date</code> and …\nCreate a new <code>OffsetDateTime</code> with the given <code>Date</code>, <code>Time</code>, and …\nCreate a new <code>OffsetDateTime</code> with the given <code>Date</code> and <code>Time</code> …\nGet the next month.\nGet the next weekday.\nGet the next calendar date.\nCalculates the first occurrence of a weekday that is …\nReturns an <code>Instant</code> corresponding to “now”.\nAttempt to create a new <code>OffsetDateTime</code> with the current …\nCreate a new <code>OffsetDateTime</code> with the current date and time …\nGet n-th next month.\nGet n-th next day.\nCalculates the <code>n</code>th occurrence of a weekday that is …\nGet n-th previous month.\nGet n-th previous day.\nCalculates the <code>n</code>th occurrence of a weekday that is …\nGet the zero-indexed number of days from Monday.\nGet the zero-indexed number of days from Sunday.\nGet the one-indexed number of days from Monday.\nGet the one-indexed number of days from Sunday.\nGet the <code>UtcOffset</code>.\nGet the day of the year.\nGet the day of the year of the date in the stored offset.\nGet the day of the year.\nParse a <code>Date</code> from the input using the provided format …\nParse an <code>OffsetDateTime</code> from the input using the provided …\nParse a <code>PrimitiveDateTime</code> from the input using the …\nParse a <code>Time</code> from the input using the provided format …\nParse a <code>UtcOffset</code> from the input using the provided format …\nParsing for various types.\nCalculates the first occurrence of a weekday that is …\nGet the previous month.\nGet the previous weekday.\nGet the previous calendar date.\nReplace the date, which is assumed to be in the stored …\nReplace the date, preserving the time.\nReplace the date and time, which are assumed to be in the …\nReplace the day of the month.\nReplace the day of the month.\nReplace the day of the month.\nReplace the clock hour.\nReplace the clock hour.\nReplace the clock hour.\nReplace the microseconds within the second.\nReplace the microseconds within the second.\nReplace the microseconds within the second.\nReplace the milliseconds within the second.\nReplace the milliseconds within the second.\nReplace the milliseconds within the second.\nReplace the minutes within the hour.\nReplace the minutes within the hour.\nReplace the minutes within the hour.\nReplace the month of the year.\nReplace the month of the year.\nReplace the month of the year.\nReplace the nanoseconds within the second.\nReplace the nanoseconds within the second.\nReplace the nanoseconds within the second.\nReplace the offset. The date and time components remain …\nReplace the day of the year.\nReplace the day of the year.\nReplace the day of the year.\nReplace the seconds within the minute.\nReplace the seconds within the minute.\nReplace the seconds within the minute.\nReplace the time, which is assumed to be in the stored …\nReplace the time, preserving the date.\nReplace the year. The month and day will be unchanged.\nReplace the year. The month and day will be unchanged.\nReplace the year. The month and day will be unchanged.\nComputes <code>self + duration</code>, saturating value on overflow.\nComputes <code>self + rhs</code>, saturating if an overflow occurred.\nComputes <code>self + duration</code>, saturating value on overflow.\nComputes <code>self + duration</code>, saturating value on overflow.\nComputes <code>self * rhs</code>, saturating if an overflow occurred.\nCreates a new <code>Duration</code> from the specified number of seconds\nCreates a new <code>Duration</code> from the specified number of seconds\nComputes <code>self - duration</code>, saturating value on overflow.\nComputes <code>self - rhs</code>, saturating if an overflow occurred.\nComputes <code>self - duration</code>, saturating value on overflow.\nComputes <code>self - duration</code>, saturating value on overflow.\nGet the second within the minute in the stored offset.\nGet the second within the minute.\nGet the second within the minute.\nCreate a new <code>Duration</code> with the given number of seconds.\nCreates a new <code>Duration</code> from the specified number of …\nCreates a new <code>Duration</code> from the specified number of …\nObtain the number of seconds past the minute the offset is …\nPanics\nPanics\nPanics\nPanics\nPanics\nPanics\nPanics\nPanics\nPanics\nPanics\nPanics\nPanics\nPanics\nPanics\nSubtract the sub-day time of the <code>Duration</code> from the <code>Time</code>. …\nSubtract two <code>Time</code>s, returning the <code>Duration</code> between. This …\nSubtract the sub-day time of the <code>std::time::Duration</code> from …\nPanics\nPanics\nPanics\nPanics\nGet the number of microseconds past the number of whole …\nGet the number of milliseconds past the number of whole …\nGet the number of nanoseconds past the number of whole …\nGet the week number where week 1 begins on the first …\nGet the week number where week 1 begins on the first …\nGet the week number where week 1 begins on the first …\nGet the <code>Time</code> in the stored offset.\nGet the <code>Time</code> component of the <code>PrimitiveDateTime</code>.\nRuns a closure, returning the duration of time it took to …\nGet the year, month, and day.\nGet the year, month, and day.\nGet the year, month, and day.\nGet the clock hour, minute, and second.\nGet the clock hour, minute, second, and microsecond.\nGet the clock hour, minute, second, and millisecond.\nGet the clock hour, minute, second, and nanosecond.\nGet the ISO 8601 year, week number, and weekday.\nGet the ISO 8601 year, week number, and weekday.\nGet the ISO 8601 year, week number, and weekday.\nGet the Julian day for the date.\nGet the Julian day for the date. The time is not taken …\nGet the Julian day for the date. The time is not taken …\nConvert the <code>OffsetDateTime</code> from the current <code>UtcOffset</code> to …\nGet the year and ordinal day number.\nGet the year and ordinal day number.\nGet the year and ordinal day number.\nGet the Unix timestamp.\nGet the Unix timestamp in nanoseconds.\nConvert the existing <code>Duration</code> to a <code>std::time::Duration</code> and …\nUtility functions.\nGet the weekday.\nGet the weekday of the date in the stored offset.\nGet the weekday.\nCreate a new <code>Duration</code> with the given number of weeks. …\nGet the number of whole days in the duration.\nGet the number of whole hours in the duration.\nObtain the number of whole hours the offset is from UTC. A …\nGet the number of whole microseconds in the duration.\nGet the number of whole milliseconds in the duration.\nGet the number of whole minutes in the duration.\nObtain the number of whole minutes the offset is from UTC. …\nGet the number of nanoseconds in the duration.\nGet the number of whole seconds in the duration.\nObtain the number of whole seconds the offset is from UTC. …\nGet the number of whole weeks in the duration.\nAttempt to create a <code>PrimitiveDateTime</code> using the existing …\nAttempt to create a <code>PrimitiveDateTime</code> using the existing …\nAttempt to create a <code>PrimitiveDateTime</code> using the existing …\nAttempt to create a <code>PrimitiveDateTime</code> using the existing …\nCreate a <code>PrimitiveDateTime</code> using the existing date and the …\nGet the year of the date.\nGet the year of the date in the stored offset.\nGet the year of the date.\nA unit of time representing exactly one day.\nA unit of time representing exactly one hour.\nA unit of time representing exactly one microsecond.\nA unit of time representing exactly one millisecond.\nA unit of time representing exactly one minute.\nA unit of time representing exactly one nanosecond.\nA unit of time representing exactly one second.\nA unit of time representing exactly one week.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nObtain the number of times <code>Nanosecond</code> can fit into <code>T</code>. If <code>T</code> …\nObtain the number of times <code>Microsecond</code> can fit into <code>T</code>. If <code>T</code>…\nObtain the number of times <code>Millisecond</code> can fit into <code>T</code>. If <code>T</code>…\nObtain the number of times <code>Second</code> can fit into <code>T</code>. If <code>T</code> is …\nObtain the number of times <code>Minute</code> can fit into <code>T</code>. If <code>T</code> is …\nObtain the number of times <code>Hour</code> can fit into <code>T</code>. If <code>T</code> is …\nObtain the number of times <code>Day</code> can fit into <code>T</code>. If <code>T</code> is …\nObtain the number of times <code>Week</code> can fit into <code>T</code>. If <code>T</code> is …\nAn error type indicating that a component provided to a …\nSome component contained an invalid value for the type.\nAn error type indicating that a conversion failed because …\nAn error type indicating that a <code>TryFrom</code> call failed …\nA unified error type for anything returned by a method in …\nSomething was expected, but not found.\nAn error occurred when formatting.\nThe system’s UTC offset could not be determined at the …\nThe <code>Parsed</code> did not include enough information to construct …\nThe type being formatted does not contain sufficient …\nThe component named has a value that cannot be formatted …\nA dynamic component was not valid.\nA component name is not valid.\nThe format description provided was not valid.\nA string literal was not what was expected.\nA modifier is not valid.\nAn error type indicating that a <code>FromStr</code> call failed …\nA component name is missing.\nA required modifier is missing.\nCertain behavior is not supported in the given context.\nAn error that occurred at some stage of parsing.\nAn error that occurred while parsing the input into a …\nA value of <code>std::io::Error</code> was returned internally.\nAn error that occurred when converting a <code>Parsed</code> to another …\nThere was a bracket pair that was opened but not closed.\nThe input should have ended, but there were characters …\nThe input was expected to have ended, but there are …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWhether the value’s permitted range is conditional, i.e. …\nObtain the name of the component whose value was out of …\nThe context in which the behavior is not supported.\nThe zero-based index of the opening bracket.\nThe zero-based index the component name starts at.\nThe zero-based index the modifier starts at.\nThe zero-based index where the component name should start.\nThe zero-based index of the component.\nThe zero-based index the item was expected to be found at.\nThe zero-based index the error occurred at.\nThe name of the invalid component name.\nThe name of the modifier that is missing.\nThe value of the invalid modifier.\nWhat was expected to be present, but wasn’t.\nThe behavior that is not supported.\nAn extension trait for <code>std::time::Instant</code> that adds …\nCreate <code>Duration</code>s from numeric literals.\nCreate <code>std::time::Duration</code>s from numeric literals.\nPanics\nPanics\nReturns <code>Some(t)</code> where <code>t</code> is the time …\nReturns <code>Some(t)</code> where <code>t</code> is the time …\nCreate a <code>Duration</code> from the number of days.\nCreate a <code>Duration</code> from the number of hours.\nCreate a <code>Duration</code> from the number of microseconds.\nCreate a <code>Duration</code> from the number of milliseconds.\nCreate a <code>Duration</code> from the number of minutes.\nCreate a <code>Duration</code> from the number of nanoseconds.\nCreate a <code>Duration</code> from the number of seconds.\nReturns the amount of time elapsed from another instant to …\nCreate a <code>std::time::Duration</code> from the number of days.\nCreate a <code>std::time::Duration</code> from the number of hours.\nCreate a <code>std::time::Duration</code> from the number of …\nCreate a <code>std::time::Duration</code> from the number of …\nCreate a <code>std::time::Duration</code> from the number of minutes.\nCreate a <code>std::time::Duration</code> from the number of …\nCreate a <code>std::time::Duration</code> from the number of seconds.\nCreate a <code>std::time::Duration</code> from the number of weeks.\nPanics\nPanics\nCreate a <code>Duration</code> from the number of weeks.\nA complete description of how to format and parse a type.\nA component of a larger format description.\nA minimal representation of a single non-literal item.\nA minimal representation of a single non-literal item.\nA minimal representation of a single non-literal item.\nA series of literals or components that collectively form …\nA series of literals or components that collectively form …\nA series of literals or components that collectively form …\nDay of the month.\nThe end of input. Parsing this component will fail if …\nA series of <code>FormatItem</code>s where, when parsing, the first …\nA series of <code>FormatItem</code>s where, when parsing, the first …\nA series of <code>FormatItem</code>s where, when parsing, the first …\nA complete description of how to format and parse a type.\nHour of the day.\nA number of bytes to ignore when parsing. This has no …\nBytes that are formatted as-is.\nBytes that are formatted as-is.\nBytes that are formatted as-is.\nMinute within the hour.\nMonth of the year.\nHour of the UTC offset.\nMinute within the hour of the UTC offset.\nSecond within the minute of the UTC offset.\nA <code>FormatItem</code> that may or may not be present when parsing. …\nA <code>FormatItem</code> that may or may not be present when parsing. …\nA <code>FormatItem</code> that may or may not be present when parsing. …\nOrdinal day of the year.\nA complete description of how to format and parse a type.\nAM/PM part of the time.\nSecond within the minute.\nSubsecond within the second.\nA Unix timestamp.\nWeek within the year.\nDay of the week.\nYear of the date.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nVarious modifiers for components.\nParse a sequence of items from the format description.\nParse a sequence of items from the format description.\nParse a sequence of items from the format description.\nWell-known formats, typically standards.\nDay of the month.\nExactly eight digits.\nThe end of input.\nExactly five digits.\nExactly four digits.\nThe full value of the year.\nHour of the day.\nIgnore some number of bytes.\nWeek 1 is the week that contains January 4.\nOnly the last two digits of the year.\nThe long form of the month name (e.g. “January”).\nThe long form of the weekday (e.g. “Monday”).\nMicroseconds since the Unix epoch.\nMilliseconds since the Unix epoch.\nMinute within the hour.\nA numerical representation using Monday as the first day …\nWeek 1 begins on the first Monday of the calendar year.\nMonth of the year.\nThe representation of a month.\nNanoseconds since the Unix epoch.\nExactly nine digits.\nThere is no padding. This can result in a width below the …\nThe number of the month (January is 1, December is 12).\nHour of the UTC offset.\nMinute within the hour of the UTC offset.\nSecond within the minute of the UTC offset.\nExactly one digit.\nAny number of digits (up to nine) that is at least one. …\nOrdinal day of the year.\nType of padding to ensure a minimum width.\nAM/PM part of the time.\nSecond within the minute.\nSeconds since the Unix epoch.\nExactly seven digits.\nThe short form of the month name (e.g. “Jan”).\nThe short form of the weekday (e.g. “Mon”).\nExactly six digits.\nA space character (<code> </code>) should be used as padding.\nSubsecond within the second.\nThe number of digits present in a subsecond representation.\nA numerical representation using Sunday as the first day …\nWeek 1 begins on the first Sunday of the calendar year.\nExactly three digits.\nExactly two digits.\nA Unix timestamp.\nThe precision of a Unix timestamp.\nWeek within the year.\nThe representation used for the week number.\nDay of the week.\nThe representation used for the day of the week.\nYear of the date.\nThe representation used for a year value.\nA zero character (<code>0</code>) should be used as padding.\nIs the value case sensitive when parsing?\nIs the value case sensitive when parsing?\nIs the value case sensitive when parsing?\nCreate an instance of <code>Ignore</code> with the provided number of …\nThe number of bytes to ignore.\nCreates a modifier that indicates the value is padded with …\nCreates an instance of this type that indicates the value …\nCreates a modifier that indicates the value is padded with …\nCreates a modifier that indicates the value uses the <code>Long</code> …\nCreates a modifier that indicates that the value is padded …\nCreates a modifier that indicates the value uses the <code>Full</code> …\nCreates a modifier that indicates the value is padded with …\nCreates a modifier that indicates the value is padded with …\nCreates a modifier that indicates the value uses the …\nCreates a modifier that indicates the value is padded with …\nCreates a modifier that indicates the stringified value …\nCreates a modifier that indicates the value only uses a …\nCreates a modifier that indicates the value is padded with …\nCreates a modifier that indicates the value is padded with …\nCreates a modifier that indicates the value represents the …\nCreates a modifier used to represent the end of input.\nHow many digits are present in the component?\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nIs the hour displayed using a 12 or 24-hour clock?\nIs the period uppercase or lowercase?\nWhether the value is based on the ISO week number or the …\nWhen using a numerical representation, should it be zero …\nThe padding to obtain the minimum width.\nThe padding to obtain the minimum width.\nThe padding to obtain the minimum width.\nThe padding to obtain the minimum width.\nThe padding to obtain the minimum width.\nThe padding to obtain the minimum width.\nThe padding to obtain the minimum width.\nThe padding to obtain the minimum width.\nThe padding to obtain the minimum width.\nThe padding to obtain the minimum width.\nThe padding to obtain the minimum width.\nThe precision of the timestamp.\nWhat form of representation should be used?\nWhat form of representation should be used?\nWhat kind of representation should be used?\nWhat kind of representation should be used?\nWhether the <code>+</code> sign is present when a positive year …\nWhether the <code>+</code> sign is present on positive values.\nWhether the <code>+</code> sign must be present for a non-negative …\nThe format described in ISO 8601.\nThe format described in RFC 2822.\nThe format described in RFC 3339.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe format described in ISO 8601.\nUse the year-month-day format.\nConfiguration for <code>Iso8601</code>.\nAn <code>Iso8601</code> that handles only the date, but is otherwise …\nAn <code>Iso8601</code> that handles the date and time, but is …\nAn <code>Iso8601</code> that handles the date, time, and UTC offset. …\nAn <code>Iso8601</code> with the default configuration.\nA configuration for the <code>Iso8601</code> format.\nFormat only the date.\nWhich format to use for the date.\nFormat the date and time.\nFormat the date, time, and UTC offset.\nAn encoded <code>Config</code> that can be used as a const parameter to …\nWhich components to format.\nFormat the hour only. Minutes, seconds, and nanoseconds …\nFormat only the offset hour. Requires the offset minute to …\nThe format described in ISO 8601.\nFormat the hour and minute. Seconds and nanoseconds will …\nFormat both the offset hour and minute.\nThe configuration can only be used for parsing. Using this …\nAn <code>Iso8601</code> that handles only the UTC offset, but is …\nFormat only the UTC offset.\nThe precision for the UTC offset.\nUse the week-ordinal format.\nAn <code>Iso8601</code> that can only be used for parsing. Using this …\nFormat the hour, minute, and second. Nanoseconds will be …\nAn <code>Iso8601</code> that handles only the time, but is otherwise …\nAn <code>Iso8601</code> that handles the time and UTC offset, but is …\nFormat only the time.\nFormat the time and UTC offset.\nThe precision and number of decimal digits present for the …\nUse the year-week-weekday format.\nEncode the configuration, permitting it to be used as a …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nSet the format used for the date.\nSet whether the format the date, time, and/or UTC offset.\nSet the precision for the UTC offset.\nSet the precision and number of decimal digits present for …\nSet whether the format contains separators (such as <code>-</code> or <code>:</code>…\nSet whether the year is six digits.\nA type that describes a format.\nConstruct a <code>Date</code> with a statically known value.\nConstruct a <code>PrimitiveDateTime</code> or <code>OffsetDateTime</code> with a …\nEquivalent of performing <code>format_description::parse()</code> at …\nConstruct a <code>UtcOffset</code> with a statically known value.\nConstruct a <code>Time</code> with a statically known value.\nA type that can be parsed.\nAll information parsed.\nObtain the <code>day</code> component.\nReturns the argument unchanged.\nObtain the <code>hour_12</code> component.\nObtain the <code>hour_12_is_pm</code> component.\nObtain the <code>hour_24</code> component.\nCalls <code>U::from(self)</code>.\nObtain the <code>iso_week_number</code> component.\nObtain the <code>iso_year</code> component.\nObtain the <code>iso_year_last_two</code> component.\nObtain the <code>minute</code> component.\nObtain the <code>monday_week_number</code> component.\nObtain the <code>month</code> component.\nCreate a new instance of <code>Parsed</code> with no information known.\nObtain the <code>offset_hour</code> component.\nObtain the <code>offset_minute</code> component.\nObtain the <code>offset_second</code> component.\nObtain the <code>ordinal</code> component.\nParse a single component, mutating the struct. The …\nParse a single <code>BorrowedFormatItem</code> or <code>OwnedFormatItem</code>, …\nParse a sequence of <code>BorrowedFormatItem</code>s or <code>OwnedFormatItem</code>…\nParse a literal byte sequence. The remaining input is …\nObtain the <code>second</code> component.\nSet the <code>set_day</code> component.\nSet the <code>set_hour_12</code> component.\nSet the <code>set_hour_12_is_pm</code> component.\nSet the <code>set_hour_24</code> component.\nSet the <code>set_iso_week_number</code> component.\nSet the <code>set_iso_year</code> component.\nSet the <code>set_iso_year_last_two</code> component.\nSet the <code>set_minute</code> component.\nSet the <code>set_monday_week_number</code> component.\nSet the <code>set_month</code> component.\nSet the <code>set_offset_hour</code> component.\nSet the <code>set_offset_minute_signed</code> component.\nSet the <code>set_offset_second_signed</code> component.\nSet the <code>set_ordinal</code> component.\nSet the <code>set_second</code> component.\nSet the <code>set_subsecond</code> component.\nSet the <code>set_sunday_week_number</code> component.\nSet the <code>set_unix_timestamp_nanos</code> component.\nSet the <code>set_weekday</code> component.\nSet the <code>set_year</code> component.\nSet the <code>set_year_last_two</code> component.\nObtain the <code>subsecond</code> component.\nObtain the <code>sunday_week_number</code> component.\nObtain the <code>unix_timestamp_nanos</code> component.\nObtain the <code>weekday</code> component.\nSet the <code>day</code> component and return <code>self</code>.\nSet the <code>hour_12</code> component and return <code>self</code>.\nSet the <code>hour_12_is_pm</code> component and return <code>self</code>.\nSet the <code>hour_24</code> component and return <code>self</code>.\nSet the <code>iso_week_number</code> component and return <code>self</code>.\nSet the <code>iso_year</code> component and return <code>self</code>.\nSet the <code>iso_year_last_two</code> component and return <code>self</code>.\nSet the <code>minute</code> component and return <code>self</code>.\nSet the <code>monday_week_number</code> component and return <code>self</code>.\nSet the <code>month</code> component and return <code>self</code>.\nSet the <code>offset_hour</code> component and return <code>self</code>.\nSet the <code>offset_minute</code> component and return <code>self</code>.\nSet the <code>offset_second</code> component and return <code>self</code>.\nSet the <code>ordinal</code> component and return <code>self</code>.\nSet the <code>second</code> component and return <code>self</code>.\nSet the <code>subsecond</code> component and return <code>self</code>.\nSet the <code>sunday_week_number</code> component and return <code>self</code>.\nSet the <code>unix_timestamp_nanos</code> component and return <code>self</code>.\nSet the <code>weekday</code> component and return <code>self</code>.\nSet the <code>year</code> component and return <code>self</code>.\nSet the <code>year_last_two</code> component and return <code>self</code>.\nObtain the <code>year</code> component.\nObtain the <code>year_last_two</code> component.\nGet the number of calendar days in a given year.\nGet the number of days in the month of a given year.\nReturns if the provided year is a leap year in the …\nUtility functions relating to the local UTC offset.\nGet the number of weeks in the ISO year.\nObtaining the local UTC offset is required to be sound. …\nThe soundness of obtaining the local UTC offset.\nObtaining the local UTC offset is allowed to invoke …\nReturns the argument unchanged.\nObtains the soundness of obtaining the local UTC offset. …\nCalls <code>U::from(self)</code>.\nSet whether obtaining the local UTC offset is allowed to …")