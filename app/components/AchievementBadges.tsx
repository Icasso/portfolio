import { Card, CardContent } from "@/components/ui/card";
import { NFTBadge } from "@/components/ui/nft-badge";

const achievements = [
  {
    title: "2024 X-ponential Starlight Award",
    description: "Recognized for exceptional contributions and innovation",
    imageUrl: "/awards/2024_x.gif",
    nftUrl:
      "https://www.okx.com/web3/marketplace/nft/asset/xlayer/0xfb97efcafa924be02fffc6f2de7892791c95be50/3?shortCode=NGbS5NC",
  },
  {
    title: "2023 X-ponential Starlight Award",
    description: "Recognized for outstanding performance and impact",
    imageUrl: "/awards/2023_x.png",
    nftUrl:
      "https://www.okx.com/web3/marketplace/nft/asset/polygon/0x32cd54b7f43ba5fd666ebfa9a325fe4b813d302f/3?shortCode=lWbQQ21",
  },
];

export function AchievementBadges() {
  return (
    <Card>
      <CardContent>
        <div className="flex flex-wrap gap-4">
          {achievements.map((achievement) => (
            <NFTBadge
              key={achievement.title}
              imageUrl={achievement.imageUrl}
              title={achievement.title}
              description={achievement.description}
              nftUrl={achievement.nftUrl}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
