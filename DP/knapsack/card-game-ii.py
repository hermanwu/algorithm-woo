'''
描述
你跟你的朋友在玩一个卡牌游戏，总共有 n 张牌。每张牌的成本为 cost[i] 并且可以对对手造成 damage[i] 的伤害。
你总共有 totalMoney 元并且需要造成至少 totalDamage 的伤害才能获胜。每张牌只能使用一次，判断你是否可以取得胜利。

input:
cost = [1,2,3,4,5]
damage = [1,2,3,4,5]
totalMoney = 10
totalDamage = 10

output:
true

'''


def cardGame(self, cost, damage, totalMoney, totalDamage):
  # dp[i] is the maximum damage with total money i
  num = len(cost)
  dp = [0] * (totalMoney + 1)
  for i in range(1, num + 1):
    for j in range(totalMoney, cost[i - 1] - 1, - 1):
      dp[j] = max(dp[j], dp[j - cost[i - 1]] + damage[i - 1])
      if dp[j] >= totalDamage:
        return True
  return False
