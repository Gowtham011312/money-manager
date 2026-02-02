import { useState } from "react";

export default function TransactionFilters({
  division,
  setDivision,
  dateFilter,
  setDateFilter,
  fromDate,
  setFromDate,
  toDate,
  setToDate,
  onAdd,
}) {
  return (
    <div className="bg-white p-4 rounded-xl shadow flex flex-wrap gap-4 items-center justify-between">

      {/* LEFT SIDE */}
      <div className="flex flex-wrap gap-4 items-center">

        {/* Division */}
        <select
          value={division}
          onChange={(e) => setDivision(e.target.value)}
          className="border px-3 py-2 rounded-lg"
        >
          <option value="All">All</option>
          <option value="Personal">Personal</option>
          <option value="Office">Office</option>
        </select>

        {/* Date Filter */}
        <select
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
          className="border px-3 py-2 rounded-lg bg-blue-50 font-medium"
        >
          <option value="today">Today</option>
          <option value="week">This Week</option>
          <option value="month">This Month</option>
          <option value="year">This Year</option>
          <option value="custom">Custom Range</option>
        </select>

        {/* Date Range */}
        {dateFilter === "custom" && (
          <>
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="border px-3 py-2 rounded-lg"
            />
            <span className="font-medium">to</span>
            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="border px-3 py-2 rounded-lg"
            />
          </>
        )}
      </div>

      {/* RIGHT SIDE */}
      <button
        onClick={onAdd}
        className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold"
      >
        + Add
      </button>
    </div>
  );
}
