const { prismaClient } = require("../application/database.js");
const { ResponseError } = require("../error/response-error.js");

const get = async (uid) => {
  const farmerCount = await prismaClient.farmer.count({ where: uid });

  if (farmerCount === 0) {
    throw new ResponseError(404, "Farmer not found");
  }

  const alerts = await prismaClient.historyAlert.findMany({
    where: { farmerUid: uid },
    select: { id: true, isRead: true },
    include: {
      captureResult: {
        select: {
          mediaUrl: true,
          createdAt: true,
        },
      },
    },
  });
  const getMonthName = (monthIndex) => {
    const monthNames = [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december",
    ];
    return monthNames[monthIndex];
  };

  const alertsSummary = alerts.map((alert) => {
    const createdAt = new Date(alert.captureResult.createdAt);
    return {
      id: alert.id,
      month: getMonthName(createdAt.getMonth()),
      date: createdAt.getDate(),
      year: createdAt.getFullYear(),
      media_url: alert.captureResult.mediaUrl,
    };
  });

  return alertsSummary;
};

module.exports = { get };
